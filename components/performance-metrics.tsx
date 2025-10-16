import { Card } from "@/components/ui/card"
import { Activity, Zap, Database, Server } from "lucide-react"

const metrics = [
  {
    label: "Requests/sec",
    value: "12,847",
    change: "+8.2%",
    icon: Activity,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Avg Latency",
    value: "142ms",
    change: "-12.5%",
    icon: Zap,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    label: "DB Queries/sec",
    value: "8,234",
    change: "+5.1%",
    icon: Database,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "CPU Usage",
    value: "67%",
    change: "+3.2%",
    icon: Server,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
]

export function PerformanceMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
              <p className="text-3xl font-bold tracking-tight">{metric.value}</p>
              <p className="text-sm font-medium text-muted-foreground">{metric.change} vs last hour</p>
            </div>
            <div className={`rounded-full p-3 ${metric.bgColor}`}>
              <metric.icon className={`h-5 w-5 ${metric.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
