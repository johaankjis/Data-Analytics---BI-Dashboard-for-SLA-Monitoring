"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Performance Degradation", value: 8, color: "hsl(var(--chart-1))" },
  { name: "Service Outage", value: 5, color: "hsl(var(--chart-2))" },
  { name: "Timeout Issues", value: 3, color: "hsl(var(--chart-3))" },
  { name: "Configuration Error", value: 1, color: "hsl(var(--chart-4))" },
]

export function SLABreachAnalysis() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">SLA Breach Root Causes</h3>
        <p className="text-sm text-muted-foreground">Distribution of breach incidents this month</p>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-6 space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <span className="font-medium">{item.value} incidents</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
