import { Card } from "@/components/ui/card"
import { AlertTriangle, AlertCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

const alerts = [
  {
    id: 1,
    severity: "critical" as const,
    title: "CDN Response Time Degraded",
    description: "Average response time exceeded 500ms threshold",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    severity: "warning" as const,
    title: "Auth Service Load High",
    description: "CPU utilization at 85%, approaching capacity",
    timestamp: "15 minutes ago",
  },
  {
    id: 3,
    severity: "info" as const,
    title: "Scheduled Maintenance",
    description: "Database backup completed successfully",
    timestamp: "1 hour ago",
  },
  {
    id: 4,
    severity: "critical" as const,
    title: "Payment Gateway Timeout",
    description: "Multiple transaction timeouts detected",
    timestamp: "2 hours ago",
  },
]

export function RecentAlerts() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Recent Alerts</h3>
        <p className="text-sm text-muted-foreground">Latest system notifications and warnings</p>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={cn(
              "flex gap-4 p-4 rounded-lg border",
              alert.severity === "critical" && "border-danger/50 bg-danger/5",
              alert.severity === "warning" && "border-warning/50 bg-warning/5",
              alert.severity === "info" && "border-border bg-muted/30",
            )}
          >
            <div className="flex-shrink-0 mt-0.5">
              {alert.severity === "critical" && <AlertTriangle className="h-5 w-5 text-danger" />}
              {alert.severity === "warning" && <AlertCircle className="h-5 w-5 text-warning" />}
              {alert.severity === "info" && <Info className="h-5 w-5 text-primary" />}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-medium text-sm">{alert.title}</h4>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{alert.timestamp}</span>
              </div>
              <p className="text-sm text-muted-foreground">{alert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
