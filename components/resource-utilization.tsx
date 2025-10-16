"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const resources = [
  { name: "CPU Usage", value: 67, max: 100, unit: "%", status: "warning" as const },
  { name: "Memory Usage", value: 8.2, max: 16, unit: "GB", status: "normal" as const },
  { name: "Disk I/O", value: 450, max: 1000, unit: "MB/s", status: "normal" as const },
  { name: "Network Bandwidth", value: 2.8, max: 10, unit: "Gbps", status: "normal" as const },
  { name: "Database Connections", value: 850, max: 1000, unit: "", status: "warning" as const },
  { name: "Cache Hit Rate", value: 94, max: 100, unit: "%", status: "success" as const },
]

export function ResourceUtilization() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Resource Utilization</h3>
        <p className="text-sm text-muted-foreground">Current system resource consumption</p>
      </div>
      <div className="space-y-6">
        {resources.map((resource) => {
          const percentage = (resource.value / resource.max) * 100
          return (
            <div key={resource.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{resource.name}</span>
                <span className="text-muted-foreground">
                  {resource.value}
                  {resource.unit} / {resource.max}
                  {resource.unit}
                </span>
              </div>
              <Progress
                value={percentage}
                className="h-2"
                indicatorClassName={
                  resource.status === "success"
                    ? "bg-success"
                    : resource.status === "warning"
                      ? "bg-warning"
                      : "bg-primary"
                }
              />
            </div>
          )
        })}
      </div>
    </Card>
  )
}
