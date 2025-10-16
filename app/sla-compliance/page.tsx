import { DashboardLayout } from "@/components/dashboard-layout"
import { SLAOverviewCards } from "@/components/sla-overview-cards"
import { SLAByServiceChart } from "@/components/sla-by-service-chart"
import { SLAHistoricalTable } from "@/components/sla-historical-table"
import { SLABreachAnalysis } from "@/components/sla-breach-analysis"

export default function SLACompliancePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">SLA Compliance Monitoring</h1>
          <p className="text-muted-foreground mt-2">Detailed service-level agreement tracking and breach analysis</p>
        </div>

        <SLAOverviewCards />

        <div className="grid gap-6 lg:grid-cols-2">
          <SLAByServiceChart />
          <SLABreachAnalysis />
        </div>

        <SLAHistoricalTable />
      </div>
    </DashboardLayout>
  )
}
