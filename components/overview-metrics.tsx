import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const metrics = [
  {
    label: "Overall SLA Compliance",
    value: "98.7%",
    change: "+2.3%",
    trend: "up" as const,
    status: "success" as const,
  },
  {
    label: "Active Systems",
    value: "47/50",
    change: "-3",
    trend: "down" as const,
    status: "warning" as const,
  },
  {
    label: "Avg Response Time",
    value: "142ms",
    change: "-18ms",
    trend: "up" as const,
    status: "success" as const,
  },
  {
    label: "Critical Alerts",
    value: "3",
    change: "0",
    trend: "neutral" as const,
    status: "danger" as const,
  },
]

export function OverviewMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
              <p className="text-3xl font-bold tracking-tight">{metric.value}</p>
            </div>
            <div
              className={cn(
                "rounded-full p-2",
                metric.status === "success" && "bg-success/10",
                metric.status === "warning" && "bg-warning/10",
                metric.status === "danger" && "bg-danger/10",
              )}
            >
              {metric.trend === "up" && (
                <TrendingUp
                  className={cn(
                    "h-4 w-4",
                    metric.status === "success" && "text-success",
                    metric.status === "warning" && "text-warning",
                  )}
                />
              )}
              {metric.trend === "down" && (
                <TrendingDown
                  className={cn(
                    "h-4 w-4",
                    metric.status === "warning" && "text-warning",
                    metric.status === "danger" && "text-danger",
                  )}
                />
              )}
              {metric.trend === "neutral" && <Minus className="h-4 w-4 text-muted-foreground" />}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span
              className={cn(
                "text-sm font-medium",
                metric.trend === "up" && metric.status === "success" && "text-success",
                metric.trend === "down" && metric.status === "warning" && "text-warning",
                metric.trend === "neutral" && "text-muted-foreground",
              )}
            >
              {metric.change}
            </span>
            <span className="text-sm text-muted-foreground">vs last week</span>
          </div>
        </Card>
      ))}
    </div>
  )
}
