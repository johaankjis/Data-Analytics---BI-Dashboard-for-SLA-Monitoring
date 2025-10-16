"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { date: "Jan 1", compliance: 97.2, target: 95 },
  { date: "Jan 8", compliance: 98.1, target: 95 },
  { date: "Jan 15", compliance: 96.8, target: 95 },
  { date: "Jan 22", compliance: 98.5, target: 95 },
  { date: "Jan 29", compliance: 97.9, target: 95 },
  { date: "Feb 5", compliance: 98.7, target: 95 },
  { date: "Feb 12", compliance: 99.1, target: 95 },
]

export function SLAComplianceChart() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">SLA Compliance Trend</h3>
        <p className="text-sm text-muted-foreground">7-week performance overview</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} domain={[94, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="compliance"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))" }}
            name="Compliance %"
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            name="Target %"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
