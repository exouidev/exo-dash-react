export interface TicketMessage {
  id: string
  sender: string
  senderRole: 'Agent' | 'Customer' | 'System'
  timestamp: string
  content: string
}

export interface Ticket {
  id: string
  number: string
  subject: string
  customer: string
  status: 'Open' | 'Pending' | 'Resolved' | 'Closed'
  priority: 'High' | 'Medium' | 'Low'
  createdAt: string
  messages: TicketMessage[]
}

export const fetchTicketsData = async (): Promise<Ticket[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      id: 't1',
      number: '14093',
      subject: 'Double charged on my last invoice',
      customer: 'Acme Corp',
      status: 'Open',
      priority: 'High',
      createdAt: '10:42 AM',
      messages: [
        { id: 'm1', sender: 'Jane Smith', senderRole: 'Customer', timestamp: '10:42 AM', content: 'Hello,\n\nI just received my invoice for this month and it seems I was charged twice for the Pro plan. Can you please refund the duplicate charge?\n\nThanks,\nJane' }
      ]
    },
    {
      id: 't2',
      number: '14092',
      subject: 'How do I add a new team member?',
      customer: 'Globex Inc',
      status: 'Pending',
      priority: 'Low',
      createdAt: 'Yesterday',
      messages: [
        { id: 'm1', sender: 'Mark Johnson', senderRole: 'Customer', timestamp: 'Yesterday 2:15 PM', content: 'Hi, I cannot figure out where to invite new users to my workspace. Can you point me to the right settings page?' },
        { id: 'm2', sender: 'Sarah Jenkins', senderRole: 'Agent', timestamp: 'Yesterday 3:00 PM', content: 'Hi Mark,\n\nYou can invite team members by going to Settings -> Team -> Invite New. I have linked to our help center article below for detailed steps.\n\nLet me know if you need anything else!' },
        { id: 's1', sender: 'System', senderRole: 'System', timestamp: 'Yesterday 3:00 PM', content: 'Ticket status changed to Pending' }
      ]
    },
    {
      id: 't3',
      number: '14088',
      subject: 'API Rate Limits keep throwing 429',
      customer: 'Initech',
      status: 'Open',
      priority: 'Medium',
      createdAt: 'Monday',
      messages: [
        { id: 'm1', sender: 'Peter Gibbons', senderRole: 'Customer', timestamp: 'Monday 9:00 AM', content: 'We are receiving consistent 429 errors when calling the telemetry API endpoints. We are well within our 10,000 req/min limit. Is there an issue on your side?' }
      ]
    },
    {
      id: 't4',
      number: '14075',
      subject: 'Login page throwing 500 error on Microsoft Edge',
      customer: 'Stark Industries',
      status: 'Resolved',
      priority: 'High',
      createdAt: 'Last Week',
      messages: [
        { id: 'm1', sender: 'Tony Stark', senderRole: 'Customer', timestamp: 'Oct 15', content: 'The login page crashes completely when using Edge on Windows 11.' },
        { id: 's1', sender: 'System', senderRole: 'System', timestamp: 'Oct 15', content: 'Ticket escalated to Engineering' },
        { id: 'm2', sender: 'Sarah Jenkins', senderRole: 'Agent', timestamp: 'Oct 16', content: 'Hi Tony, we deployed a hotfix last night that resolves the Edge compatibility issue. Thanks for reporting this!' },
        { id: 'm3', sender: 'Tony Stark', senderRole: 'Customer', timestamp: 'Oct 16', content: 'Confirmed fixed. Thank you.' },
        { id: 's2', sender: 'System', senderRole: 'System', timestamp: 'Oct 16', content: 'Ticket marked as Resolved' }
      ]
    },
    {
      id: 't5',
      number: '14060',
      subject: 'Cancellation Request',
      customer: 'Wayne Enterprises',
      status: 'Closed',
      priority: 'Medium',
      createdAt: 'Oct 02',
      messages: [
        { id: 'm1', sender: 'Bruce Wayne', senderRole: 'Customer', timestamp: 'Oct 02', content: 'Please cancel our subscription effective immediately.' }
      ]
    },
    {
      id: 't6',
      number: '14101',
      subject: 'Feature Request: Dark Mode scheduling',
      customer: 'Pied Piper',
      status: 'Open',
      priority: 'Low',
      createdAt: 'Just now',
      messages: [
        { id: 'm1', sender: 'Richard Hendricks', senderRole: 'Customer', timestamp: 'Just now', content: 'It would be great if the dark mode could automatically toggle based on the OS schedule instead of being a manual switch.' }
      ]
    }
  ];
};
