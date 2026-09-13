import { useState } from "react"
import { DollarSign, Users, CreditCard, Activity } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { useTheme } from "../../hooks/use-theme"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend )

export function EcommerceDashboard() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const textColor = isDark ? '#a1a1aa' : '#71717a'
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'

  const kpis = [
    { id: '1', label: 'Total Revenue', value: '$45,231.89', trend: 20.1, icon: DollarSign },
    { id: '2', label: 'Subscriptions', value: '+2,350', trend: 180.1, icon: Users },
    { id: '3', label: 'Sales', value: '+12,234', trend: 19, icon: CreditCard },
    { id: '4', label: 'Active Now', value: '573', trend: -2.5, icon: Activity }
  ]

  const recentTransactions = [
    { id: 'INV001', name: 'John Doe', status: 'Completed', amount: 250.00, date: '2023-10-01' },
    { id: 'INV002', name: 'Jane Smith', status: 'Pending', amount: 150.00, date: '2023-10-02' },
    { id: 'INV003', name: 'Bob Johnson', status: 'Failed', amount: 350.00, date: '2023-10-03' },
    { id: 'INV004', name: 'Alice Brown', status: 'Completed', amount: 450.00, date: '2023-10-04' },
    { id: 'INV005', name: 'Charlie Davis', status: 'Completed', amount: 125.00, date: '2023-10-05' },
    { id: 'INV006', name: 'Diana Evans', status: 'Pending', amount: 550.00, date: '2023-10-06' },
    { id: 'INV007', name: 'Evan Frank', status: 'Completed', amount: 75.00, date: '2023-10-07' },
  ]

  const [searchQuery, setSearchQuery] = useState('')
  const filteredTransactions = recentTransactions.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.id.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5)

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Completed': return 'default'
      case 'Pending': return 'secondary'
      case 'Failed': return 'destructive'
      default: return 'outline'
    }
  }

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      { label: 'Revenue', data: [4000, 3000, 2000, 2780, 1890, 2390, 3490], backgroundColor: '#3b82f6' }
    ]
  }

  const categoryData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      { data: [45, 35, 20], backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981'], borderWidth: 0 }
    ]
  }

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.label}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={kpi.trend > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                  {kpi.trend > 0 ? "+" : ""}{kpi.trend}% 
                </span>
                {" "}from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        <Card className="lg:col-span-2 block min-w-0 flex flex-col h-full">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue vs active users.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-2">
             <div className="relative w-full h-[300px]">
               <Bar 
                 data={revenueData} 
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
          </CardContent>
        </Card>

        <Card className="block min-w-0 flex flex-col h-full">
          <CardHeader>
            <CardTitle>Traffic Source</CardTitle>
            <CardDescription>Platform distribution for visits.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-2">
             <div className="relative w-full h-[300px]">
               <Doughnut 
                 data={categoryData} 
                 options={{
                   responsive: true, maintainAspectRatio: false, cutout: '75%',
                   plugins: { legend: { position: 'bottom', labels: { color: textColor } } }
                 }} 
               />
             </div>
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
              {filteredTransactions.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(row.status) as any}>{row.status}</Badge>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell className="font-medium">${row.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
