"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { service: "API Gateway", "4xx": 45, "5xx": 12 },
  { service: "Auth Service", "4xx": 78, "5xx": 23 },
  { service: "Database", "4xx": 15, "5xx": 8 },
  { service: "Payment", "4xx": 32, "5xx": 5 },
  { service: "Email", "4xx": 56, "5xx": 18 },
  { service: "CDN", "4xx": 89, "5xx": 45 },
]

export function ErrorRateChart() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Error Rate by Service</h3>
        <p className="text-sm text-muted-foreground">HTTP error distribution (last 24 hours)</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="service" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey="4xx" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} name="4xx Errors" />
          <Bar dataKey="5xx" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} name="5xx Errors" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
