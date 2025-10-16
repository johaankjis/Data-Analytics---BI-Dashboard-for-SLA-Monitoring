import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle2, Clock, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const timelineEvents = [
  {
    id: 1,
    timestamp: "2025-02-15 14:32:18",
    severity: "critical" as const,
    status: "active" as const,
    title: "CDN Response Time Spike",
    description: "Average response time exceeded 500ms threshold across multiple regions",
    service: "CDN",
    affectedUsers: "~2,500",
  },
  {
    id: 2,
    timestamp: "2025-02-15 13:45:22",
    severity: "warning" as const,
    status: "investigating" as const,
    title: "Database Connection Pool High",
    description: "Connection pool utilization at 85%, may impact performance",
    service: "Database",
    affectedUsers: "~500",
  },
  {
    id: 3,
    timestamp: "2025-02-15 12:18:45",
    severity: "info" as const,
    status: "resolved" as const,
    title: "Scheduled Maintenance Completed",
    description: "Database backup and optimization completed successfully",
    service: "Database",
    affectedUsers: "0",
  },
  {
    id: 4,
    timestamp: "2025-02-15 11:22:33",
    severity: "critical" as const,
    status: "resolved" as const,
    title: "Payment Gateway Timeout",
    description: "Multiple transaction timeouts detected, auto-scaled resources",
    service: "Payment",
    affectedUsers: "~1,200",
  },
  {
    id: 5,
    timestamp: "2025-02-15 09:15:12",
    severity: "warning" as const,
    status: "resolved" as const,
    title: "Auth Service Load Spike",
    description: "Temporary increase in authentication requests, normalized after 15 minutes",
    service: "Auth Service",
    affectedUsers: "~800",
  },
]

export function AlertsTimeline() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Alerts Timeline</h3>
        <p className="text-sm text-muted-foreground">Chronological view of system alerts and incidents</p>
      </div>
      <div className="space-y-4">
        {timelineEvents.map((event, index) => (
          <div key={event.id} className="relative">
            {index !== timelineEvents.length - 1 && (
              <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
            )}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div
                  className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center",
                    event.severity === "critical" && "bg-danger/10",
                    event.severity === "warning" && "bg-warning/10",
                    event.severity === "info" && "bg-primary/10",
                  )}
                >
                  {event.status === "resolved" ? (
                    <CheckCircle2
                      className={cn(
                        "h-4 w-4",
                        event.severity === "critical" && "text-danger",
                        event.severity === "warning" && "text-warning",
                        event.severity === "info" && "text-primary",
                      )}
                    />
                  ) : event.status === "investigating" ? (
                    <Clock className="h-4 w-4 text-warning" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-danger" />
                  )}
                </div>
              </div>
              <div className="flex-1 pb-8">
                <div
                  className={cn(
                    "border rounded-lg p-4 space-y-3",
                    event.status === "active" && "border-danger/50 bg-danger/5",
                    event.status === "investigating" && "border-warning/50 bg-warning/5",
                    event.status === "resolved" && "border-border bg-muted/30",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <Badge
                          variant={
                            event.severity === "critical"
                              ? "destructive"
                              : event.severity === "warning"
                                ? "default"
                                : "outline"
                          }
                        >
                          {event.severity}
                        </Badge>
                        <Badge variant="outline">{event.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="flex-shrink-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Service:</span>
                      <span>{event.service}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Affected Users:</span>
                      <span>{event.affectedUsers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Time:</span>
                      <span>{event.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
