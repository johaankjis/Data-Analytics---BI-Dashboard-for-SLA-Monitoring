import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Info } from "lucide-react"
import { cn } from "@/lib/utils"

const predictions = [
  {
    id: 1,
    title: "CDN Capacity Warning",
    description: "Traffic spike predicted to exceed capacity by 15% during peak hours tomorrow",
    probability: 87,
    impact: "high" as const,
    timeframe: "18-24 hours",
    recommendation: "Scale CDN resources or enable additional edge locations",
  },
  {
    id: 2,
    title: "Database Connection Pool",
    description: "Connection pool utilization trending towards saturation",
    probability: 72,
    impact: "medium" as const,
    timeframe: "48-72 hours",
    recommendation: "Increase max connections or optimize query patterns",
  },
  {
    id: 3,
    title: "Auth Service Load",
    description: "Gradual increase in authentication requests may cause slowdown",
    probability: 65,
    impact: "medium" as const,
    timeframe: "3-5 days",
    recommendation: "Consider horizontal scaling or caching improvements",
  },
  {
    id: 4,
    title: "Storage Capacity",
    description: "Current growth rate will reach 80% capacity threshold",
    probability: 91,
    impact: "low" as const,
    timeframe: "7-10 days",
    recommendation: "Plan storage expansion or implement data archival",
  },
]

export function PredictiveInsights() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Predictive Insights</h3>
        <p className="text-sm text-muted-foreground">AI-powered predictions of potential issues</p>
      </div>
      <div className="space-y-4">
        {predictions.map((prediction) => (
          <div key={prediction.id} className="border border-border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-medium text-sm">{prediction.title}</h4>
                  <p className="text-sm text-muted-foreground">{prediction.description}</p>
                </div>
              </div>
              <Badge
                variant={
                  prediction.impact === "high" ? "destructive" : prediction.impact === "medium" ? "default" : "outline"
                }
              >
                {prediction.impact}
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <span className="font-medium">Probability:</span>
                <span className={cn(prediction.probability >= 80 ? "text-warning font-medium" : "")}>
                  {prediction.probability}%
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">Timeframe:</span>
                <span>{prediction.timeframe}</span>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-muted/50 rounded p-3">
              <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">{prediction.recommendation}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
