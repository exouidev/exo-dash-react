export interface Message {
  id: string
  content: string
  timestamp: string
  senderId: string
  isRead: boolean
}

export interface ChatContact {
  id: string
  name: string
  avatar: string
  status: 'online' | 'offline' | 'busy' | 'away'
  lastMessage: string
  lastMessageTime: string
  unread: number
}

export interface ChatData {
  contacts: ChatContact[];
  messages: Record<string, Message[]>;
}

export const fetchChatData = async (): Promise<ChatData> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    contacts: [
      { id: 'u1', name: 'Alice Freeman', avatar: 'AF', status: 'online', lastMessage: 'Awesome, I left a few comments on the PR for you to review.', lastMessageTime: '10:45 AM', unread: 2 },
      { id: 'u2', name: 'Bob Smith', avatar: 'BS', status: 'busy', lastMessage: 'Let me check on that bug.', lastMessageTime: 'Yesterday', unread: 0 },
      { id: 'u3', name: 'Charlie Davis', avatar: 'CD', status: 'offline', lastMessage: 'No worries, we can sync on this tomorrow.', lastMessageTime: 'Yesterday', unread: 0 },
      { id: 'u4', name: 'Diana Evans', avatar: 'DE', status: 'away', lastMessage: 'Thanks for the update. The marketing email is scheduled to go out tomorrow.', lastMessageTime: 'Monday', unread: 1 },
      { id: 'u5', name: 'Engineering Pod', avatar: 'EP', status: 'online', lastMessage: 'Alice: We are monitoring the database IO throughput now. Everything looks stable.', lastMessageTime: 'Friday', unread: 0 }
    ],
    messages: {
      'u1': [
          { id: 'm1', content: 'Hey Alice, did you get a chance to look at the new dashboard layout? I pushed the massive UI refactor branch.', timestamp: '10:15 AM', senderId: 'me', isRead: true },
          { id: 'm2', content: 'Yes! It looks much cleaner now. The whitespace helps structure the data nicely.', timestamp: '10:22 AM', senderId: 'u1', isRead: true },
          { id: 'm3', content: 'I really love what you did with the table skeleton loaders. Pushing them down into the TableBody completely saved the head layout.', timestamp: '10:23 AM', senderId: 'u1', isRead: true },
          { id: 'm4', content: 'Thanks! Yeah, it took some tricky mapping with React.cloneElement, but it works perfectly. Are the colors matching the Figma spec?', timestamp: '10:30 AM', senderId: 'me', isRead: true },
          { id: 'm5', content: 'Mostly yes, but we might need to tweak the `--muted` variable in the dark themes because it blends into the background card color.', timestamp: '10:33 AM', senderId: 'u1', isRead: true },
          { id: 'm6', content: 'Good catch, I\'ll patch that in index.css right now.', timestamp: '10:34 AM', senderId: 'me', isRead: true },
          { id: 'm7', content: 'Awesome, I left a few comments on the PR for you to review.', timestamp: '10:45 AM', senderId: 'u1', isRead: false },
          { id: 'm8', content: 'Also could you send the latest Figma link so I can double-check the border padding on the active states?', timestamp: '10:46 AM', senderId: 'u1', isRead: false },
      ],
      'u2': [
          { id: 'm1', content: 'Hey Bob, having a weird issue with the SaaS charts throwing a prop type error on load.', timestamp: '2:00 PM', senderId: 'me', isRead: true },
          { id: 'm2', content: 'That’s strange. Did you import the TimeRange interface properly? Remember Vite is super strict about `import { type TimeRange }`', timestamp: '2:15 PM', senderId: 'u2', isRead: true },
          { id: 'm3', content: 'Yeah I fixed that earlier. This looks like the chart.js component is receiving a null dataset before the mock data resolves.', timestamp: '2:20 PM', senderId: 'me', isRead: true },
          { id: 'm4', content: 'Ah, you probably need to add an `isLoading || !chartData` guard.', timestamp: '2:25 PM', senderId: 'u2', isRead: true },
          { id: 'm5', content: 'Let me check on that bug.', timestamp: '3:05 PM', senderId: 'u2', isRead: true },
      ],
      'u3': [
          { id: 'm1', content: 'Charlie, did the client approve the wireframes?', timestamp: '4:10 PM', senderId: 'me', isRead: true },
          { id: 'm2', content: 'They want to bump the meeting to 4pm to discuss the kanban layout. They feel 4 columns is too restrictive.', timestamp: '4:15 PM', senderId: 'u3', isRead: true },
          { id: 'm3', content: 'I can jump on that call if you want back-up. The 4 column layout is a technical constraint for the mobile breakpoint.', timestamp: '4:20 PM', senderId: 'me', isRead: true },
          { id: 'm4', content: 'No worries, we can sync on this tomorrow. I’ll just explain the responsive rules to them.', timestamp: '4:35 PM', senderId: 'u3', isRead: true },
      ],
      'u4': [
          { id: 'm1', content: 'Hi Diana, the email template HTML looks good, but the rendering breaks in Outlook 2016.', timestamp: '9:00 AM', senderId: 'u4', isRead: true },
          { id: 'm2', content: 'Ugh, typical Outlook. I will convert the grid layout to nested tables. Give me an hour.', timestamp: '9:15 AM', senderId: 'me', isRead: true },
          { id: 'm3', content: 'I pushed the fix to the staging server. Can you do a quick test pass?', timestamp: '11:00 AM', senderId: 'me', isRead: true },
          { id: 'm4', content: 'Thanks for the update. The marketing email is scheduled to go out tomorrow. I will test it this afternoon and let you know if it breaks again.', timestamp: '11:30 AM', senderId: 'u4', isRead: false },
      ],
      'u5': [
          { id: 'm1', content: 'Bob: Vercel deployment just triggered.', timestamp: '1:00 PM', senderId: 'u2', isRead: true },
          { id: 'm2', content: 'Me: Awesome, I am watching the logs. Builds seem normal.', timestamp: '1:05 PM', senderId: 'me', isRead: true },
          { id: 'm3', content: 'Alice: It went live, checking metrics now.', timestamp: '1:10 PM', senderId: 'u1', isRead: true },
          { id: 'm4', content: 'Diana: Sweet! I will notify the marketing team to prepare the blast.', timestamp: '1:15 PM', senderId: 'u4', isRead: true },
          { id: 'm5', content: 'Alice: We are monitoring the database IO throughput now. Everything looks stable.', timestamp: '1:20 PM', senderId: 'u1', isRead: true },
      ]
    }
  };
};
