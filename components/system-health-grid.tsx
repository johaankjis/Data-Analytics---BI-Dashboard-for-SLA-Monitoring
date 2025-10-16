import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const systems = [
  { name: "API Gateway", status: "healthy", uptime: 99.9 },
  { name: "Database Cluster", status: "healthy", uptime: 99.8 },
  { name: "Auth Service", status: "degraded", uptime: 97.2 },
  { name: "Payment Processing", status: "healthy", uptime: 99.7 },
  { name: "Email Service", status: "healthy", uptime: 99.5 },
  { name: "CDN", status: "critical", uptime: 94.1 },
]

export function SystemHealthGrid() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">System Health Status</h3>
        <p className="text-sm text-muted-foreground">Current operational status</p>
      </div>
      <div className="space-y-3">
        {systems.map((system) => (
          <div key={system.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "h-3 w-3 rounded-full",
                  system.status === "healthy" && "bg-success",
                  system.status === "degraded" && "bg-warning",
                  system.status === "critical" && "bg-danger",
                )}
              />
              <span className="font-medium">{system.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{system.uptime}% uptime</span>
              <span
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded-full",
                  system.status === "healthy" && "bg-success/10 text-success",
                  system.status === "degraded" && "bg-warning/10 text-warning",
                  system.status === "critical" && "bg-danger/10 text-danger",
                )}
              >
                {system.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
