import { useState, useEffect } from "react"
import { DollarSign, Users, CreditCard, Activity } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { useTheme } from "../../hooks/use-theme"
import { Skeleton } from "../../components/ui/skeleton"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
import { type EcommerceData, fetchEcommerceData } from "../../lib/mock-data/ecommerce-mock-data"

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend )

export function EcommerceDashboard() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const textColor = isDark ? '#a1a1aa' : '#71717a'
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'

  const [data, setData] = useState<EcommerceData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    fetchEcommerceData().then((res) => {
      if (active) {
        setData(res);
        setIsLoading(false);
      }
    });
    return () => { active = false; };
  }, []);

  const kpiStaticShells = [
    { id: '1', label: 'Total Revenue', icon: DollarSign },
    { id: '2', label: 'Subscriptions', icon: Users },
    { id: '3', label: 'Sales', icon: CreditCard },
    { id: '4', label: 'Active Now', icon: Activity }
  ]

  const filteredTransactions = data ? data.transactions.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.id.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5) : []

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Completed': return 'default'
      case 'Pending': return 'secondary'
      case 'Failed': return 'destructive'
      default: return 'outline'
    }
  }

  const revenueChartData = data ? {
    labels: data.revenueData.labels,
    datasets: [
      { label: 'Revenue', data: data.revenueData.data, backgroundColor: '#3b82f6' }
    ]
  } : null;

  const categoryChartData = data ? {
    labels: data.categoryData.labels,
    datasets: [
      { data: data.categoryData.data, backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981'], borderWidth: 0 }
    ]
  } : null;

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiStaticShells.map((kpi) => {
          const kpiData = data?.kpis.find(k => k.id === kpi.id);
          
          return (
            <Card key={kpi.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.label}</CardTitle>
                <kpi.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoading || !kpiData ? (
                  <div className="space-y-2 mt-1 py-1">
                    <Skeleton className="h-7 w-[100px]" />
                    <Skeleton className="h-4 w-[140px]" />
                  </div>
                ) : (
                  <>
                    <div className="text-2xl font-bold">{kpiData.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className={kpiData.trend > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                        {kpiData.trend > 0 ? "+" : ""}{kpiData.trend}% 
                      </span>
                      {" "}from last month
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        <Card className="lg:col-span-2 block min-w-0 flex flex-col h-full">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue vs active users.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-2">
             {isLoading || !revenueChartData ? (
                <Skeleton className="w-full h-[300px] rounded-xl" />
             ) : (
               <div className="relative w-full h-[300px]">
                 <Bar 
                   data={revenueChartData} 
                   options={{
                     responsive: true, maintainAspectRatio: false,
                     plugins: { legend: { display: false } },
                     scales: { 
                       x: { ticks: { color: textColor }, grid: { color: gridColor, display: false } }, 
                       y: { ticks: { color: textColor }, grid: { color: gridColor } } 
                     }
                   }} 
                 />
               </div>
             )}
          </CardContent>
        </Card>

        <Card className="block min-w-0 flex flex-col h-full">
          <CardHeader>
            <CardTitle>Traffic Source</CardTitle>
            <CardDescription>Platform distribution for visits.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-2">
             {isLoading || !categoryChartData ? (
                <Skeleton className="w-full h-[300px] rounded-xl" />
             ) : (
               <div className="relative w-full h-[300px]">
                 <Doughnut 
                   data={categoryChartData} 
                   options={{
                     responsive: true, maintainAspectRatio: false, cutout: '75%',
                     plugins: { legend: { position: 'bottom', labels: { color: textColor } } }
                   }} 
                 />
               </div>
             )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search transactions..."
              className="flex h-9 w-full md:w-1/3 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading || !data ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-[80px] rounded-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-[70px]" /></TableCell>
                  </TableRow>
                ))
              ) : (
                filteredTransactions.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(row.status) as any}>{row.status}</Badge>
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell className="font-medium">${row.amount.toFixed(2)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
