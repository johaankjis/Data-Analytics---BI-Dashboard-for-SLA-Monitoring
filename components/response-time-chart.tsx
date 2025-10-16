"use client"

import { Card } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { time: "00:00", p50: 120, p95: 280, p99: 450 },
  { time: "04:00", p50: 115, p95: 265, p99: 420 },
  { time: "08:00", p50: 145, p95: 320, p99: 520 },
  { time: "12:00", p50: 160, p95: 380, p99: 580 },
  { time: "16:00", p50: 155, p95: 350, p99: 550 },
  { time: "20:00", p50: 135, p95: 310, p99: 490 },
  { time: "23:59", p50: 125, p95: 290, p99: 460 },
]

export function ResponseTimeChart() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Response Time Distribution</h3>
        <p className="text-sm text-muted-foreground">24-hour percentile breakdown</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorP50" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorP95" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorP99" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            label={{ value: "ms", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Area
            type="monotone"
            dataKey="p50"
            stroke="hsl(var(--chart-1))"
            fillOpacity={1}
            fill="url(#colorP50)"
            name="P50"
          />
          <Area
            type="monotone"
            dataKey="p95"
            stroke="hsl(var(--chart-2))"
            fillOpacity={1}
            fill="url(#colorP95)"
            name="P95"
          />
          <Area
            type="monotone"
            dataKey="p99"
            stroke="hsl(var(--chart-3))"
            fillOpacity={1}
            fill="url(#colorP99)"
            name="P99"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
