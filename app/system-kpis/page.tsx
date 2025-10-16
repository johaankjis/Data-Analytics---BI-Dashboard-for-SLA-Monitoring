import { DashboardLayout } from "@/components/dashboard-layout"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { ResourceUtilization } from "@/components/resource-utilization"
import { ResponseTimeChart } from "@/components/response-time-chart"
import { ThroughputChart } from "@/components/throughput-chart"
import { ErrorRateChart } from "@/components/error-rate-chart"

export default function SystemKPIsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">System KPIs & Metrics</h1>
          <p className="text-muted-foreground mt-2">Real-time performance indicators and operational metrics</p>
        </div>

        <PerformanceMetrics />

        <div className="grid gap-6 lg:grid-cols-2">
          <ResponseTimeChart />
          <ThroughputChart />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ErrorRateChart />
          <ResourceUtilization />
        </div>
      </div>
    </DashboardLayout>
  )
}
