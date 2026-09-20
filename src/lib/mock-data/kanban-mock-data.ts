export interface KanbanTask {
  id: string
  title: string
  description: string
  priority: 'Low' | 'Medium' | 'High'
  comments: number
  attachments: number
  assignees: string[]
}

export interface KanbanColumn {
  id: string
  title: string
  tasks: KanbanTask[]
}

export const fetchKanbanData = async (): Promise<KanbanColumn[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { id: 't1', title: 'Design Database Schema', description: 'Map out the core entities: Users, Organizations, and Workspaces. Include relational mapping.', priority: 'High', comments: 4, attachments: 2, assignees: ['JD', 'AS'] },
        { id: 't2', title: 'Setup OAuth via Google', description: 'Implement passport/NextAuth flow for seamless 1-click Google signon.', priority: 'Medium', comments: 0, attachments: 0, assignees: ['MK'] },
        { id: 't3', title: 'Update dependencies to React 19', description: 'Run npm update and fix all breaking changes mapped to core schematics.', priority: 'Low', comments: 12, attachments: 1, assignees: ['TR'] }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        { id: 't4', title: 'Build interactive Kanban Board', description: 'Create a drag and drop kanban using pangea/dnd strictly typed variables.', priority: 'High', comments: 1, attachments: 0, assignees: ['AI'] },
        { id: 't5', title: 'Draft Marketing Copy', description: 'Write landing page highlights emphasizing forms and Tailwind v4 capabilities.', priority: 'Medium', comments: 0, attachments: 0, assignees: ['SW', 'JD'] }
      ]
    },
    {
      id: 'review',
      title: 'Review',
      tasks: [
        { id: 't6', title: 'Security Audit', description: 'Review the RBAC configurations across the Node APIs.', priority: 'High', comments: 5, attachments: 2, assignees: ['MK', 'BL'] }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: 't7', title: 'Initialize Repository', description: 'Bootstrap react dashboard workspace completely from scratch without boilerplate.', priority: 'Low', comments: 0, attachments: 0, assignees: ['AI'] }
      ]
    }
  ];
};
