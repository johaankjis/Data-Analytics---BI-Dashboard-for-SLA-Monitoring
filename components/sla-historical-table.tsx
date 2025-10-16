import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const historicalData = [
  {
    date: "2025-02-12",
    service: "CDN",
    sla: 94.2,
    target: 99.0,
    incidents: 3,
    status: "breached" as const,
  },
  {
    date: "2025-02-11",
    service: "Auth Service",
    sla: 97.1,
    target: 98.0,
    incidents: 2,
    status: "breached" as const,
  },
  {
    date: "2025-02-10",
    service: "Payment",
    sla: 99.5,
    target: 99.9,
    incidents: 0,
    status: "met" as const,
  },
  {
    date: "2025-02-09",
    service: "API Gateway",
    sla: 99.2,
    target: 99.0,
    incidents: 0,
    status: "met" as const,
  },
  {
    date: "2025-02-08",
    service: "Database",
    sla: 98.8,
    target: 99.5,
    incidents: 1,
    status: "breached" as const,
  },
  {
    date: "2025-02-07",
    service: "Email",
    sla: 98.3,
    target: 98.0,
    incidents: 0,
    status: "met" as const,
  },
  {
    date: "2025-02-06",
    service: "API Gateway",
    sla: 99.8,
    target: 99.0,
    incidents: 0,
    status: "met" as const,
  },
  {
    date: "2025-02-05",
    service: "Payment",
    sla: 99.9,
    target: 99.9,
    incidents: 0,
    status: "met" as const,
  },
]

export function SLAHistoricalTable() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold">Historical SLA Performance</h3>
        <p className="text-sm text-muted-foreground">Recent service-level agreement tracking</p>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Service</TableHead>
              <TableHead className="text-right">SLA %</TableHead>
              <TableHead className="text-right">Target %</TableHead>
              <TableHead className="text-right">Incidents</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historicalData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{new Date(row.date).toLocaleDateString()}</TableCell>
                <TableCell>{row.service}</TableCell>
                <TableCell
                  className={cn("text-right font-medium", row.sla >= row.target ? "text-success" : "text-danger")}
                >
                  {row.sla}%
                </TableCell>
                <TableCell className="text-right text-muted-foreground">{row.target}%</TableCell>
                <TableCell className="text-right">{row.incidents}</TableCell>
                <TableCell>
                  <Badge variant={row.status === "met" ? "default" : "destructive"}>
                    {row.status === "met" ? "Met" : "Breached"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
