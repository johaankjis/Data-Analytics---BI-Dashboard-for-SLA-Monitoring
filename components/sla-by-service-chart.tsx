"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts"

const data = [
  { service: "API Gateway", compliance: 99.2, target: 99.0 },
  { service: "Database", compliance: 98.8, target: 99.5 },
  { service: "Auth Service", compliance: 97.1, target: 98.0 },
  { service: "Payment", compliance: 99.5, target: 99.9 },
  { service: "Email", compliance: 98.3, target: 98.0 },
  { service: "CDN", compliance: 94.2, target: 99.0 },
]

export function SLAByServiceChart() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">SLA Compliance by Service</h3>
        <p className="text-sm text-muted-foreground">Current month performance vs targets</p>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" domain={[90, 100]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis dataKey="service" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={100} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey="compliance" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} name="Actual %">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.compliance >= entry.target ? "hsl(var(--chart-1))" : "hsl(var(--destructive))"}
              />
            ))}
          </Bar>
          <Bar
            dataKey="target"
            fill="hsl(var(--muted-foreground))"
            radius={[0, 4, 4, 0]}
            name="Target %"
            opacity={0.3}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
