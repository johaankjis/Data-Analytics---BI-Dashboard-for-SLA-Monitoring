"use client"

import { Card } from "@/components/ui/card"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const data = [
  { time: 1, value: 120, anomaly: false },
  { time: 2, value: 125, anomaly: false },
  { time: 3, value: 118, anomaly: false },
  { time: 4, value: 122, anomaly: false },
  { time: 5, value: 280, anomaly: true },
  { time: 6, value: 119, anomaly: false },
  { time: 7, value: 124, anomaly: false },
  { time: 8, value: 121, anomaly: false },
  { time: 9, value: 127, anomaly: false },
  { time: 10, value: 320, anomaly: true },
  { time: 11, value: 123, anomaly: false },
  { time: 12, value: 126, anomaly: false },
  { time: 13, value: 120, anomaly: false },
  { time: 14, value: 125, anomaly: false },
  { time: 15, value: 122, anomaly: false },
  { time: 16, value: 128, anomaly: false },
  { time: 17, value: 124, anomaly: false },
  { time: 18, value: 121, anomaly: false },
  { time: 19, value: 295, anomaly: true },
  { time: 20, value: 119, anomaly: false },
]

export function AnomalyDetection() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Anomaly Detection</h3>
        <p className="text-sm text-muted-foreground">Real-time pattern analysis and outlier identification</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="time"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            label={{ value: "Time (hours)", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            dataKey="value"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            label={{ value: "Response Time (ms)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Scatter data={data} fill="hsl(var(--primary))">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.anomaly ? "hsl(var(--destructive))" : "hsl(var(--primary))"} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <div className="mt-6 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span className="text-muted-foreground">Normal behavior</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-destructive" />
          <span className="text-muted-foreground">Detected anomalies</span>
        </div>
      </div>
    </Card>
  )
}
