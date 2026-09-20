export interface User {
  id: string
  name: string
  email: string
  role: 'Admin' | 'Manager' | 'Member'
  status: 'Active' | 'Pending' | 'Offline'
  lastActivity: string
  avatar: string
}

export const fetchUsersData = async (): Promise<User[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    { id: '1', name: 'Alice Freeman', email: 'alice@example.com', role: 'Admin', status: 'Active', lastActivity: 'Just now', avatar: 'AF' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Manager', status: 'Offline', lastActivity: '2 hours ago', avatar: 'BS' },
    { id: '3', name: 'Charlie Davis', email: 'charlie@example.com', role: 'Member', status: 'Pending', lastActivity: 'Never', avatar: 'CD' },
    { id: '4', name: 'Diana Evans', email: 'diana@example.com', role: 'Member', status: 'Active', lastActivity: '5 mins ago', avatar: 'DE' },
    { id: '5', name: 'Evan Frank', email: 'evan@example.com', role: 'Manager', status: 'Offline', lastActivity: 'Yesterday', avatar: 'EF' },
    { id: '6', name: 'Fiona Gallagher', email: 'fiona@example.com', role: 'Member', status: 'Active', lastActivity: 'Just now', avatar: 'FG' },
  ];
};
