import { DashboardLayout } from "@/components/dashboard-layout"
import { AlertsSummary } from "@/components/alerts-summary"
import { PredictiveInsights } from "@/components/predictive-insights"
import { AnomalyDetection } from "@/components/anomaly-detection"
import { AlertsTimeline } from "@/components/alerts-timeline"

export default function AlertsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">Predictive Alerts System</h1>
          <p className="text-muted-foreground mt-2">AI-powered anomaly detection and predictive insights</p>
        </div>

        <AlertsSummary />

        <div className="grid gap-6 lg:grid-cols-2">
          <PredictiveInsights />
          <AnomalyDetection />
        </div>

        <AlertsTimeline />
      </div>
    </DashboardLayout>
  )
}
