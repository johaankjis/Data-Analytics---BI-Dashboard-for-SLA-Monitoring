import { Card } from "@/components/ui/card"
import { AlertTriangle, TrendingUp, Shield, Zap } from "lucide-react"

const alertMetrics = [
  {
    label: "Active Alerts",
    value: "12",
    description: "Requiring attention",
    icon: AlertTriangle,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    label: "Predicted Issues",
    value: "5",
    description: "Next 24 hours",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Auto-Resolved",
    value: "28",
    description: "This week",
    icon: Shield,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    label: "Avg Response Time",
    value: "4.2m",
    description: "To critical alerts",
    icon: Zap,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function AlertsSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {alertMetrics.map((metric) => (
        <Card key={metric.label} className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
              <p className="text-3xl font-bold tracking-tight">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
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
