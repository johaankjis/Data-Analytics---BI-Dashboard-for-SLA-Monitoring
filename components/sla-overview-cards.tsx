import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, Clock, TrendingUp } from "lucide-react"

const slaMetrics = [
  {
    label: "SLA Met",
    value: "1,247",
    percentage: "98.7%",
    icon: CheckCircle2,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    label: "SLA Breached",
    value: "17",
    percentage: "1.3%",
    icon: XCircle,
    color: "text-danger",
    bgColor: "bg-danger/10",
  },
  {
    label: "Avg Resolution Time",
    value: "2.4h",
    percentage: "-12% vs target",
    icon: Clock,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Improvement Rate",
    value: "+5.2%",
    percentage: "Month over month",
    icon: TrendingUp,
    color: "text-success",
    bgColor: "bg-success/10",
  },
]

export function SLAOverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {slaMetrics.map((metric) => (
        <Card key={metric.label} className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
              <p className="text-3xl font-bold tracking-tight">{metric.value}</p>
              <p className={`text-sm font-medium ${metric.color}`}>{metric.percentage}</p>
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
