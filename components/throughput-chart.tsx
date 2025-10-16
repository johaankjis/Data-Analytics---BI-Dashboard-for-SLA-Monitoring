"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { time: "00:00", requests: 8500, successful: 8420, failed: 80 },
  { time: "04:00", requests: 6200, successful: 6150, failed: 50 },
  { time: "08:00", requests: 14500, successful: 14320, failed: 180 },
  { time: "12:00", requests: 18200, successful: 17950, failed: 250 },
  { time: "16:00", requests: 16800, successful: 16580, failed: 220 },
  { time: "20:00", requests: 12400, successful: 12280, failed: 120 },
  { time: "23:59", requests: 9800, successful: 9710, failed: 90 },
]

export function ThroughputChart() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Request Throughput</h3>
        <p className="text-sm text-muted-foreground">24-hour request volume and success rate</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
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
            dataKey="requests"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
            name="Total Requests"
          />
          <Line
            type="monotone"
            dataKey="successful"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={false}
            name="Successful"
          />
          <Line
            type="monotone"
            dataKey="failed"
            stroke="hsl(var(--destructive))"
            strokeWidth={2}
            dot={false}
            name="Failed"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
