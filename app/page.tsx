import { DashboardLayout } from "@/components/dashboard-layout"
import { OverviewMetrics } from "@/components/overview-metrics"
import { SLAComplianceChart } from "@/components/sla-compliance-chart"
import { SystemHealthGrid } from "@/components/system-health-grid"
import { RecentAlerts } from "@/components/recent-alerts"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-2">Real-time SLA monitoring and system performance metrics</p>
        </div>

        <OverviewMetrics />

        <div className="grid gap-6 lg:grid-cols-2">
          <SLAComplianceChart />
          <SystemHealthGrid />
        </div>

        <RecentAlerts />
      </div>
    </DashboardLayout>
  )
}
