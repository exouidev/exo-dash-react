import { useState, useMemo } from "react"
import { Search, Filter, Edit, Trash2, MoreHorizontal, Shield, Plus, Bell } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Modal } from "../../components/ui/modal"

interface User {
  id: string
  name: string
  email: string
  role: 'Admin' | 'Manager' | 'Member'
  status: 'Active' | 'Pending' | 'Offline'
  lastActivity: string
  avatar: string
}

export function UsersApp() {
  const [searchQuery, setSearchQuery] = useState('')

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState<User | null>(null)

  const [isUserModalOpen, setIsUserModalOpen] = useState(false)
  const [editingUserId, setEditingUserId] = useState<string | null>(null)
  
  const [newUserName, setNewUserName] = useState('')
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserRole, setNewUserRole] = useState<'Admin' | 'Manager' | 'Member'>('Member')
  const [newUserStatus, setNewUserStatus] = useState<'Active' | 'Pending' | 'Offline'>('Active')

  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'Alice Freeman', email: 'alice@example.com', role: 'Admin', status: 'Active', lastActivity: 'Just now', avatar: 'AF' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Manager', status: 'Offline', lastActivity: '2 hours ago', avatar: 'BS' },
    { id: '3', name: 'Charlie Davis', email: 'charlie@example.com', role: 'Member', status: 'Pending', lastActivity: 'Never', avatar: 'CD' },
    { id: '4', name: 'Diana Evans', email: 'diana@example.com', role: 'Member', status: 'Active', lastActivity: '5 mins ago', avatar: 'DE' },
    { id: '5', name: 'Evan Frank', email: 'evan@example.com', role: 'Manager', status: 'Offline', lastActivity: 'Yesterday', avatar: 'EF' },
    { id: '6', name: 'Fiona Gallagher', email: 'fiona@example.com', role: 'Member', status: 'Active', lastActivity: 'Just now', avatar: 'FG' },
  ])

  const filteredUsers = useMemo(() => {
    return users.filter(u => 
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [users, searchQuery])

  const openDeleteModal = (user: User) => {
    setUserToDelete(user)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter(u => u.id !== userToDelete.id))
    }
    setIsDeleteModalOpen(false)
  }

  const openAddModal = () => {
    setEditingUserId(null)
    setNewUserName('')
    setNewUserEmail('')
    setNewUserRole('Member')
    setNewUserStatus('Pending')
    setIsUserModalOpen(true)
  }

  const openEditModal = (user: User) => {
    setEditingUserId(user.id)
    setNewUserName(user.name)
    setNewUserEmail(user.email)
    setNewUserRole(user.role)
    setNewUserStatus(user.status)
    setIsUserModalOpen(true)
  }

  const saveUser = () => {
    if (!newUserName || !newUserEmail) return

    const initials = newUserName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)

    if (editingUserId) {
      setUsers(users.map(u => u.id === editingUserId ? {
        ...u, name: newUserName, email: newUserEmail, role: newUserRole, status: newUserStatus, avatar: initials
      } : u))
    } else {
      setUsers([{
        id: Math.random().toString(36).substring(2, 9),
        name: newUserName, email: newUserEmail, role: newUserRole, status: newUserStatus, lastActivity: 'Just now', avatar: initials
      }, ...users])
    }
    
    setIsUserModalOpen(false)
  }

  return (
    <div className="flex-1 space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground mt-1">Manage your team members and their account permissions here.</p>
        </div>
        <Button onClick={openAddModal}>
          <Plus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3 border-b">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>All Users ({users.length})</CardTitle>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64 z-10">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text" placeholder="Search users..."
                  value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <Table>
             <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map(row => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-medium text-xs">
                        {row.avatar}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">{row.name}</span>
                        <span className="text-xs text-muted-foreground">{row.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-sm text-foreground">
                      {row.role === 'Admin' && <Shield className="h-3.5 w-3.5 text-blue-500" />}
                      {row.role}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={row.status === 'Active' ? 'default' : row.status === 'Pending' ? 'secondary' : 'outline' as any}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-muted-foreground text-sm flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        {row.status === 'Active' ? (
                          <><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span></>
                        ) : row.status === 'Pending' ? (
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
                        ) : (
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-muted/60"></span>
                        )}
                      </span>
                      {row.lastActivity}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEditModal(row)} className="h-8 w-8 inline-flex items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="Edit">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button onClick={() => openDeleteModal(row)} className="h-8 w-8 inline-flex items-center justify-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="h-8 w-8 inline-flex items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="More">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">No results.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Delete User">
        <p className="text-sm text-muted-foreground pb-4">This action cannot be undone. Are you sure you want to remove this user?</p>
        {userToDelete && (
          <div className="bg-destructive/10 text-destructive text-sm font-medium p-3 rounded-md border border-destructive/20 mt-2">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 shrink-0" />
              <p>You are about to delete <strong>{userToDelete.name}</strong> ({userToDelete.email}). Their access will be revoked immediately.</p>
            </div>
          </div>
        )}
        <div className="mt-6 gap-2 flex w-full justify-end">
          <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
          <Button variant="destructive" onClick={confirmDelete}>Delete User</Button>
        </div>
      </Modal>

      <Modal isOpen={isUserModalOpen} onClose={() => setIsUserModalOpen(false)} title={editingUserId ? 'Edit User' : 'Add New User'}>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none">Full Name <span className="text-destructive">*</span></label>
            <input
              value={newUserName} onChange={e => setNewUserName(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
              placeholder="e.g. Jane Doe"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none">Email Address <span className="text-destructive">*</span></label>
            <input
              type="email"
              value={newUserEmail} onChange={e => setNewUserEmail(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
              placeholder="e.g. jane@example.com"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none">Role</label>
              <select
                value={newUserRole} onChange={e => setNewUserRole(e.target.value as any)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
              >
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Member">Member</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none">Status</label>
              <select
                value={newUserStatus} onChange={e => setNewUserStatus(e.target.value as any)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-4 gap-2 flex w-full justify-end">
          <Button variant="outline" onClick={() => setIsUserModalOpen(false)}>Cancel</Button>
          <Button disabled={!newUserName || !newUserEmail} onClick={saveUser}>
            {editingUserId ? 'Save Changes' : 'Add User'}
          </Button>
        </div>
      </Modal>
    </div>
  )
}
