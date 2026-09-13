import { useState, useMemo, useEffect } from "react"
import { Search, ChevronDown, Layers, Edit, Trash2, MoreHorizontal, Download, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

interface UserRecord {
  id: string
  name: string
  email: string
  avatar: string
  role: string
  status: 'Active' | 'Offline' | 'Banned'
  lastActive: string
}

export function DataTablePage() {
  const allColumns = [
    { key: 'select', label: '' },
    { key: 'user', label: 'User' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'lastActive', label: 'Last Active' },
    { key: 'actions', label: '' }
  ]

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [visibleColumnKeys, setVisibleColumnKeys] = useState<Set<string>>(new Set(['select', 'user', 'role', 'status', 'lastActive', 'actions']))
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const [roleFilter, setRoleFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  
  const [editingCell, setEditingCell] = useState<{id: string, field: keyof UserRecord} | null>(null)

  const [data, setData] = useState<UserRecord[]>([
    { id: '1', name: 'Olivia Martin', email: 'olivia.martin@email.com', avatar: 'https://i.pravatar.cc/150?u=olivia', role: 'Owner', status: 'Active', lastActive: '2 mins ago' },
    { id: '2', name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', avatar: 'https://i.pravatar.cc/150?u=isabella', role: 'Developer', status: 'Active', lastActive: '1 hr ago' },
    { id: '3', name: 'William Kim', email: 'will@email.com', avatar: 'https://i.pravatar.cc/150?u=will', role: 'Designer', status: 'Offline', lastActive: '5 hrs ago' },
    { id: '4', name: 'Sofia Davis', email: 'sofia.davis@email.com', avatar: 'https://i.pravatar.cc/150?u=sofia', role: 'Developer', status: 'Active', lastActive: 'Just now' },
    { id: '5', name: 'Michael Wilson', email: 'michael@email.com', avatar: 'https://i.pravatar.cc/150?u=mike', role: 'Manager', status: 'Offline', lastActive: '1 day ago' },
    { id: '6', name: 'Emma Wilson', email: 'emma@email.com', avatar: 'https://i.pravatar.cc/150?u=emma', role: 'Analyst', status: 'Active', lastActive: '30 mins ago' },
  ])

  useEffect(() => {
    const handleGlobalClick = () => { setActiveDropdown(null); setEditingCell(null) }
    document.addEventListener("click", handleGlobalClick)
    return () => document.removeEventListener("click", handleGlobalClick)
  }, [])

  const filteredData = useMemo(() => {
    return data.filter(u => {
      if (roleFilter && u.role !== roleFilter) return false
      if (statusFilter && u.status !== statusFilter) return false
      if (searchQuery && !(u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.email.toLowerCase().includes(searchQuery.toLowerCase()))) return false
      return true
    })
  }, [data, roleFilter, statusFilter, searchQuery])

  const toggleColumn = (key: string) => {
    const newSet = new Set(visibleColumnKeys)
    if (newSet.has(key)) newSet.delete(key)
    else newSet.add(key)
    setVisibleColumnKeys(newSet)
  }

  const toggleSelection = (id: string) => {
    const newSet = new Set(selectedRows)
    if (newSet.has(id)) newSet.delete(id)
    else newSet.add(id)
    setSelectedRows(newSet)
  }

  const deleteRow = (id: string) => {
    setData(data => data.filter(r => r.id !== id))
    const newSet = new Set(selectedRows)
    newSet.delete(id)
    setSelectedRows(newSet)
  }

  const saveEdit = (rowId: string, field: keyof UserRecord, value: string) => {
    setData(users => users.map(u => u.id === rowId ? { ...u, [field]: value } : u))
    setEditingCell(null)
  }

  return (
    <div className="flex-1 space-y-4 pb-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Advanced Data Table</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export</Button>
          <Button><Plus className="mr-2 h-4 w-4" /> Add User</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Users Directory</CardTitle>
          <CardDescription>Manage your team members. Double-click on Name, Role, or Status to edit inline.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-4">
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" placeholder="Filter users..." 
                  value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-8 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>

              <div className="relative">
                <select 
                  className="flex h-9 w-[130px] items-center rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring appearance-none"
                  value={roleFilter} onChange={e => setRoleFilter(e.target.value)}
                >
                  <option value="">All Roles</option>
                  <option value="Owner">Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 opacity-50 pointer-events-none" />
              </div>

              <div className="relative">
                <select 
                  className="flex h-9 w-[130px] items-center rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring appearance-none"
                  value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
                >
                  <option value="">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Offline">Offline</option>
                  <option value="Banned">Banned</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 opacity-50 pointer-events-none" />
              </div>
            </div>
            
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <div className="relative dropdown-container">
                <Button variant="outline" size="sm" className="h-9" onClick={e => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'columns' ? null : 'columns') }}>
                  <Layers className="mr-2 h-4 w-4" /> Columns <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
                
                {activeDropdown === 'columns' && (
                  <div className="absolute right-0 top-full mt-1 w-48 rounded-md border bg-popover text-popover-foreground shadow-md outline-none z-50 p-1" onClick={e => e.stopPropagation()}>
                    <div className="px-2 py-1.5 text-sm font-semibold">Toggle Columns</div>
                    <div className="h-px bg-muted my-1"></div>
                    {allColumns.map(col => col.key !== 'select' && col.key !== 'actions' && (
                      <label key={col.key} className="flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted rounded-sm cursor-pointer">
                        <input type="checkbox" checked={visibleColumnKeys.has(col.key)} onChange={() => toggleColumn(col.key)} className="h-4 w-4 rounded border-primary text-primary focus:ring-primary" />
                        {col.label}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="text-sm text-muted-foreground hidden sm:block">
                {selectedRows.size} selected
              </div>
              {selectedRows.size > 0 && (
                <Button variant="destructive" size="sm" className="h-9">Delete</Button>
              )}
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                {allColumns.filter(c => visibleColumnKeys.has(c.key)).map(col => (
                  <TableHead key={col.key}>{col.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map(row => (
                <TableRow key={row.id}>
                  {visibleColumnKeys.has('select') && (
                    <TableCell>
                      <input type="checkbox" checked={selectedRows.has(row.id)} onChange={() => toggleSelection(row.id)} className="h-4 w-4 cursor-pointer rounded border-primary text-primary focus:ring-primary" />
                    </TableCell>
                  )}
                  {visibleColumnKeys.has('user') && (
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center overflow-hidden border shrink-0">
                          <img src={row.avatar} alt="Avatar" className="h-full w-full object-cover shrink-0" onError={e => (e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150"><rect width="150" height="150" fill="%23e2e8f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%2364748b">👤</text></svg>')} />
                        </div>
                        <div className="flex flex-col w-full min-w-0" onDoubleClick={() => setEditingCell({ id: row.id, field: 'name' })}>
                          {editingCell?.id === row.id && editingCell?.field === 'name' ? (
                            <input 
                              type="text" defaultValue={row.name} autoFocus 
                              onClick={e => e.stopPropagation()} 
                              onBlur={e => saveEdit(row.id, 'name', e.target.value)} 
                              onKeyDown={e => e.key === 'Enter' && saveEdit(row.id, 'name', e.currentTarget.value)}
                              className="h-6 w-full rounded-sm border border-input bg-transparent px-1 text-sm outline-none ring-1 ring-ring"
                            />
                          ) : (
                            <span className="font-medium leading-none mb-1 truncate cursor-pointer hover:text-primary transition-colors" title="Double click to edit">{row.name}</span>
                          )}
                          <span className="text-xs text-muted-foreground truncate">{row.email}</span>
                        </div>
                      </div>
                    </TableCell>
                  )}
                  {visibleColumnKeys.has('role') && (
                    <TableCell onDoubleClick={() => setEditingCell({ id: row.id, field: 'role' })}>
                      {editingCell?.id === row.id && editingCell?.field === 'role' ? (
                        <input 
                          type="text" defaultValue={row.role} autoFocus 
                          onClick={e => e.stopPropagation()} 
                          onBlur={e => saveEdit(row.id, 'role', e.target.value)} 
                          onKeyDown={e => e.key === 'Enter' && saveEdit(row.id, 'role', e.currentTarget.value)}
                          className="h-6 w-24 rounded-sm border border-input bg-transparent px-1 text-sm outline-none ring-1 ring-ring"
                        />
                      ) : (
                        <span className="text-muted-foreground cursor-pointer hover:text-foreground border-b border-transparent hover:border-muted-foreground border-dashed" title="Double click to edit">{row.role}</span>
                      )}
                    </TableCell>
                  )}
                  {visibleColumnKeys.has('status') && (
                    <TableCell onDoubleClick={() => setEditingCell({ id: row.id, field: 'status' })}>
                      {editingCell?.id === row.id && editingCell?.field === 'status' ? (
                        <select 
                          autoFocus onClick={e => e.stopPropagation()} 
                          onBlur={e => saveEdit(row.id, 'status', e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && saveEdit(row.id, 'status', e.currentTarget.value)}
                          defaultValue={row.status}
                          className="h-6 rounded-sm border border-input bg-transparent px-1 text-xs outline-none ring-1 ring-ring"
                        >
                          <option value="Active">Active</option>
                          <option value="Offline">Offline</option>
                          <option value="Banned">Banned</option>
                        </select>
                      ) : (
                        <Badge variant={row.status === 'Active' ? 'default' : row.status === 'Offline' ? 'secondary' : 'destructive'} className="cursor-pointer">
                          {row.status}
                        </Badge>
                      )}
                    </TableCell>
                  )}
                  {visibleColumnKeys.has('lastActive') && (
                    <TableCell className="text-muted-foreground">{row.lastActive}</TableCell>
                  )}
                  {visibleColumnKeys.has('actions') && (
                    <TableCell>
                      <div className="flex justify-end pr-4 relative">
                        <button className="h-8 w-8 rounded-md hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" onClick={e => { e.stopPropagation(); setActiveDropdown(activeDropdown === `action-${row.id}` ? null : `action-${row.id}`) }}>
                          <MoreHorizontal className="h-4 w-4" />
                        </button>

                        {activeDropdown === `action-${row.id}` && (
                          <div className="absolute right-8 top-0 mt-1 w-32 rounded-md border bg-popover text-popover-foreground shadow-md outline-none z-50 p-1" onClick={e => e.stopPropagation()}>
                            <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-muted flex items-center rounded-sm" onClick={() => { setEditingCell({ id: row.id, field: 'name' }); setActiveDropdown(null) }}>
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </button>
                            <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-muted text-destructive flex items-center rounded-sm" onClick={() => { deleteRow(row.id); setActiveDropdown(null) }}>
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
