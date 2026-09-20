export interface Email {
  id: string
  sender: string
  subject: string
  preview: string
  body: string
  date: string
  read: boolean
  type: 'inbox' | 'sent' | 'draft' | 'trash' | 'starred' | 'archive' | 'spam' | 'work' | 'personal' | 'travel'
}

export const fetchEmailData = async (): Promise<Email[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    // --- INBOX ---
    { 
      id: 'e1', 
      sender: 'GitHub', 
      subject: '[GitHub] Please verify your device', 
      preview: 'A new device has signed into your account. Please verify this was you by clicking...', 
      body: '<p>Hi there,</p><br><p>A sign in attempt requires further verification because we did not recognize your device.</p><br><p><strong>Device details:</strong><br>Chrome on macOS<br>IP: 192.168.1.42<br>Location: San Francisco, CA</p><br><p>To complete the sign in, please verify your identity by entering the verification code below:</p><br><h2 style="background: var(--muted); padding: 12px 16px; display: inline-block; border-radius: 6px; letter-spacing: 4px; font-weight: 700; margin: 10px 0;">482-192</h2><br><br><p>If this wasn\'t you, please reset your password immediately.</p>',
      date: '10:42 AM',
      read: false,
      type: 'inbox'
    },
    { 
      id: 'e2', 
      sender: 'Vercel', 
      subject: 'Deployment was successful! (Production)', 
      preview: 'Your project react-tailwind-dashboard-template has been successfully deployed...', 
      body: '<p><strong>react-tailwind-dashboard-template</strong> has completed deploying.</p><br><p>Your deployment has completed and is now available to your users. Our automated CI/CD pipeline finished building the static assets and invalidating the Edge CDN successfully in 42 seconds.</p><br><ul><li><strong>Environment:</strong> Production</li><li><strong>Branch:</strong> main</li><li><strong>Commit:</strong> \"Merge pull request #114 from feature/massive-refactor\"</li></ul><br><a href="#" style="color: #3b82f6; text-decoration: underline;">View Live Deployment</a>',
      date: 'Yesterday',
      read: true,
      type: 'inbox'
    },
    {
      id: 'e21',
      sender: 'Figma',
      subject: 'Dylan added a comment to "Dashboard UI Refresh"',
      preview: 'Dylan commented: "Can we increase the padding on the sidebar items to 16px?"',
      body: '<p><strong>Dylan</strong> left a comment on your design file:</p><br><p style="border-left: 4px solid var(--primary); padding-left: 12px; margin: 10px 0;"><em>"Can we increase the padding on the sidebar items to 16px? It feels a little cramped on touch targets."</em></p><br><a href="#" style="background: var(--primary); color: var(--primary-foreground); padding: 8px 16px; text-decoration: none; border-radius: 4px;">Reply in Figma</a>',
      date: 'Yesterday',
      read: true,
      type: 'inbox'
    },
    {
      id: 'e22',
      sender: 'Jira',
      subject: '[PROJ-4092] Fix memory leak in React useEffect',
      preview: 'Status changed from IN PROGRESS to IN REVIEW by Alice Freeman...',
      body: '<p>Ticket <strong>PROJ-4092</strong> has been updated by Alice Freeman.</p><br><p><strong>Status:</strong> In Progress ➔ In Review</p><br><p><strong>Comment:</strong> "I’ve attached the memory heap snapshots. The leak was caused by an un-cleared interval inside the calendar hook. Opening a PR shortly."</p>',
      date: 'Oct 28',
      read: true,
      type: 'inbox'
    },
    {
      id: 'e23',
      sender: 'Notion',
      subject: 'You have been invited to a workspace',
      preview: 'Engineering Team has invited you to join their Notion workspace...',
      body: '<p>You have been invited to join the <strong>Engineering Team</strong> workspace in Notion.</p><br><p>Click the link below to accept the invitation and set up your profile.</p><br><a href="#" style="background: var(--primary); color: var(--primary-foreground); padding: 8px 16px; text-decoration: none; border-radius: 4px;">Accept Invitation</a>',
      date: 'Oct 27',
      read: false,
      type: 'inbox'
    },

    // --- WORK ---
    { 
      id: 'e3', 
      sender: 'Stripe', 
      subject: 'Payment received for Invoice #INV-2041', 
      preview: 'You have received a payment of $2,499.00 USD from Alice Freeman...', 
      body: '<p>Great news! A payment of <strong>$2,499.00 USD</strong> has been successfully processed.</p><br><p><strong>Customer:</strong> Alice Freeman (alice.freeman@example.com)</p><p><strong>Invoice:</strong> #INV-2041</p><p><strong>Description:</strong> Enterprise Subscription - Annual</p><br><p>This amount will be deposited into your configured bank account ending in **3942** within the next 2-3 business days depending on your standard payout schedule.</p>',
      date: 'Oct 24',
      read: false,
      type: 'work'
    },
    { 
      id: 'e4', 
      sender: 'Bob Smith', 
      subject: 'Q3 Financial Reports Context & Notes', 
      preview: 'Please find attached the Q3 metrics as we discussed in yesterday\'s sync...', 
      body: '<p>Hi everyone,</p><br><p>Attached are the finalized Q3 numbers we discussed during yesterday\'s all-hands sync. You will notice that our Monthly Recurring Revenue (MRR) took a slight hit in August, but this was entirely offset by the huge enterprise deal we closed midway through September.</p><br><p>A few key highlights for the executive summary:</p><ul><li>Customer acquisition cost fell by 14%</li><li>LTV metrics are trending consistently upwards</li><li>Server infrastructure costs remained flat despite the 20% traffic surge</li></ul><br><p>Let me know if you need any clarification before the board meeting on Thursday. I want to make sure we have all our ducks in a row.</p><br><p>Thanks,<br>Bob</p>',
      date: 'Oct 22',
      read: true,
      type: 'work'
    },
    { 
      id: 'e8', 
      sender: 'Amazon Web Services', 
      subject: 'AWS Budget Alert - Production Account', 
      preview: 'Your AWS account has exceeded 80% of your current budget constraint...', 
      body: '<p>Hello AWS Customer,</p><br><p>You are receiving this automated alert because your AWS account has exceeded 80% of the $500.00 budget limit you set for this month.</p><br><p><strong>Current usage:</strong> $412.35</p><p><strong>Forecasted usage:</strong> $589.90</p><br><p>This surge appears to be driven primarily by excessive read/write capacity units on your DynamoDB tables and outbound data transfer spanning multiple Availability Zones. We recommend reviewing your CloudWatch alarms to identify any runaway processes.</p>',
      date: 'Oct 26',
      read: false,
      type: 'work'
    },
    {
      id: 'e24',
      sender: 'PagerDuty',
      subject: '[CRITICAL] Database CPU Utilization > 90%',
      preview: 'Incident #301 - Triggered by Datadog Monitor "Prod DB CPU High"...',
      body: '<p><strong>Incident #301 Triggered</strong></p><br><p>The production PostgreSQL primary node is currently sustaining over 90% CPU utilization for the past 5 minutes.</p><br><p><strong>Service:</strong> Production Database</p><p><strong>Monitor:</strong> Datadog RDS CPU</p><br><p>Please acknowledge this incident immediately via the PagerDuty app.</p>',
      date: 'Oct 21',
      read: true,
      type: 'work'
    },

    // --- PERSONAL ---
    { 
      id: 'e9', 
      sender: 'React Newsletter', 
      subject: 'Weekly Tech Digest: Server Components', 
      preview: 'The latest news in front-end frameworks, including React 19 features...', 
      body: '<p>Here is what happened this week in the React ecosystem:</p><br><ul><li><strong>React 19 Release Candidate:</strong> The core team has finally posted documentation on the new Server Components paradigm.</li><li><strong>Tailwind CSS v4 Engine:</strong> The new Oxide engine compiler is bringing massive speed improvements.</li><li><strong>Vite 5:</strong> Hot module reloading just got even faster.</li></ul><br><p>Stay tuned for our deep dive next week into managing global state without context overhead!</p>',
      date: 'Oct 20',
      read: true,
      type: 'personal'
    },
    {
      id: 'e25',
      sender: 'Uber Receipts',
      subject: 'Your Friday morning trip with John',
      preview: 'Total: $24.50. You rode with John. License Plate: ABC-1234...',
      body: '<p>Thanks for riding with Uber!</p><br><h2>Total: $24.50</h2><br><p><strong>Driver:</strong> John<br><strong>Vehicle:</strong> Toyota Camry (Black)<br><strong>License Plate:</strong> ABC-1234</p><br><hr/><br><p><strong>Trip Details:</strong><br>08:15 AM - Picked up at 123 Main St.<br>08:42 AM - Dropped off at 456 Tech Blvd.</p>',
      date: 'Oct 20',
      read: true,
      type: 'personal'
    },
    {
      id: 'e26',
      sender: 'Amazon.com',
      subject: 'Your Amazon.com order of "Sony WH-1000XM5"',
      preview: 'Your order has shipped! Track your package to see when it will arrive...',
      body: '<p>Your order has shipped!</p><br><p><strong>Order #114-1928374-1928374</strong></p><p>Will arrive tomorrow by 8 PM.</p><br><p><strong>Items:</strong></p><ul><li>Sony WH-1000XM5 Wireless Noise Canceling Headphones (Silver)</li></ul><br><a href="#" style="background: var(--primary); color: var(--primary-foreground); padding: 8px 16px; text-decoration: none; border-radius: 4px;">Track Package</a>',
      date: 'Oct 19',
      read: true,
      type: 'personal'
    },

    // --- TRAVEL ---
    { 
      id: 'e10', 
      sender: 'Expedia', 
      subject: 'Your Itinerary: Flight to Seattle', 
      preview: 'You are all set! Here are the details for your upcoming trip to...', 
      body: '<p>Thank you for booking with Expedia.</p><br><p><strong>Flight:</strong> DL 1245<br><strong>Date:</strong> Nov 12th<br><strong>Boarding Time:</strong> 8:30 AM<br><strong>Seat:</strong> 12A</p><br><p>Safe travels!</p>',
      date: 'Oct 18',
      read: true,
      type: 'travel'
    },
    {
      id: 'e27',
      sender: 'Airbnb',
      subject: 'Reservation Confirmed: Downtown Loft in Seattle',
      preview: 'You are going to Seattle! Your host Sarah has confirmed your request...',
      body: '<p>You are going to Seattle!</p><br><p><strong>Host:</strong> Sarah<br><strong>Check-in:</strong> Nov 12th, 3:00 PM<br><strong>Check-out:</strong> Nov 16th, 11:00 AM</p><br><p><strong>Address:</strong> 1204 Pine St, Seattle, WA 98101</p><br><p>You can message Sarah through the app if you have any questions or need recommendations for your stay.</p>',
      date: 'Oct 17',
      read: false,
      type: 'travel'
    },
    {
      id: 'e28',
      sender: 'Hertz Car Rental',
      subject: 'Rental Confirmation #HZ-89912',
      preview: 'Your car rental at Seattle-Tacoma International Airport (SEA) is confirmed.',
      body: '<p>Your car rental is confirmed.</p><br><p><strong>Confirmation Number:</strong> HZ-89912</p><p><strong>Pick-up Location:</strong> Seattle-Tacoma Int\'l Airport (SEA)</p><p><strong>Pick-up Time:</strong> Nov 12th, 10:30 AM</p><p><strong>Vehicle Class:</strong> Midsize SUV (Jeep Compass or similar)</p><br><p>Skip the counter by using the Hertz app to find your parking spot instantly when you land.</p>',
      date: 'Oct 17',
      read: true,
      type: 'travel'
    },

    // --- SENT ---
    { 
      id: 'e5', 
      sender: 'Me', 
      subject: 'Re: Q3 Financial Reports Context & Notes', 
      preview: 'Thanks Bob. These look great. I will share them with the board...', 
      body: '<p>Thanks Bob.</p><br><p>These look great. The drop in CAC is exactly what the investors have been asking to see. I will compile these bullet points into the main slide deck and share them with the board this afternoon.</p><br><p>Can you also pull the churn numbers for the SaaS module just in case they ask? A quick spreadsheet should be fine.</p><br><p>- Shane</p>',
      date: 'Oct 22',
      read: true,
      type: 'sent'
    },
    {
      id: 'e29',
      sender: 'Me',
      subject: 'Approval Code for New API Keys',
      preview: 'Hey team, here is the approval code generated by the security gateway...',
      body: '<p>Hey team,</p><br><p>Here is the approval code generated by the security gateway for the new production API keys you requested:</p><br><p style="font-family: monospace; background: var(--muted); padding: 8px; border-radius: 4px;">AUTH-892-F19-B4C</p><br><p>Please note this code expires in 4 hours.</p>',
      date: 'Oct 20',
      read: true,
      type: 'sent'
    },
    {
      id: 'e30',
      sender: 'Me',
      subject: 'Signed NDA for vendor onboarding',
      preview: 'Attached is the signed NDA. Let me know if you need any other documents...',
      body: '<p>Hi legal team,</p><br><p>Attached is the signed NDA for the new vendor onboarding process. Let me know if you need any other documents filled out before they can access the staging environments.</p><br><p>Thanks,</p>',
      date: 'Oct 15',
      read: true,
      type: 'sent'
    },

    // --- TRASH ---
    { 
      id: 'e6', 
      sender: 'Spammy McSpam', 
      subject: 'URGENT: Your account will be locked!', 
      preview: 'Dear User, your account has been flagged for suspicious activity. Click here...', 
      body: '<p>Dear Customer,</p><br><p>Warning! Your account is scheduled to be deleted in 24 hours due to a violation of our Terms of Service.</p><p><a href="#" style="background: red; color: white; padding: 10px; display: inline-block;">Verify Account Now</a></p><br><p>If you do not verify your identity, you will lose all data forever.</p>',
      date: 'Oct 10',
      read: true,
      type: 'trash'
    },
    {
      id: 'e31',
      sender: 'Target',
      subject: 'Hurry! RedCard Exclusive Early Access Ends Soon',
      preview: 'Get 20% off your entire purchase today only! Exclusions apply...',
      body: '<p>Hurry! RedCard Exclusive Early Access Ends Soon.</p><br><p>Get 20% off your entire purchase today only! Use code <strong>REDCARD20</strong> at checkout.</p>',
      date: 'Sep 30',
      read: true,
      type: 'trash'
    },
    {
      id: 'e32',
      sender: 'LinkedIn',
      subject: 'You appeared in 14 searches this week',
      preview: 'People are looking for your skills! See who is viewing your profile...',
      body: '<p>You appeared in 14 searches this week.</p><br><p>Top companies searching for your profile include: Google, Microsoft, and Amazon.</p><br><a href="#">See who viewed your profile</a>',
      date: 'Sep 25',
      read: true,
      type: 'trash'
    },

    // --- DRAFT ---
    {
      id: 'e33',
      sender: 'Me (Draft)',
      subject: 'Performance Review - Alice Freeman',
      preview: 'Alice has had an exceptional year, leading the frontend architecture initiative...',
      body: '<p>Alice has had an exceptional year, leading the frontend architecture initiative and successfully migrating the legacy dashboard templates from standard React to a fully typed Next.js App Router environment.</p><br><p>Key strengths: Technical leadership, CSS/Tailwind fluency, cross-team communication.</p><p>Areas for improvement: Need to finish the...</p>',
      date: 'Oct 29',
      read: true,
      type: 'draft'
    },
    {
      id: 'e34',
      sender: 'Me (Draft)',
      subject: 'Client Proposal: E-Commerce Redesign',
      preview: 'Hi John, thank you for reaching out regarding the redesign of your digital storefront...',
      body: '<p>Hi John,</p><br><p>Thank you for reaching out regarding the redesign of your digital storefront. Based on our conversation, I have put together a preliminary statement of work that outlines the phases for the migration.</p><br><p>Phase 1: UX Wireframing & Prototyping (2 weeks)</p><p>Phase 2: Frontend Engineering ... [finish timeframe]</p>',
      date: 'Oct 22',
      read: true,
      type: 'draft'
    },

    // --- STARRED ---
    { 
      id: 'e7', 
      sender: 'Alice Freeman', 
      subject: 'Project Kickoff Meeting Agenda', 
      preview: 'Hi team, let us meet tomorrow at 10 AM to discuss the new project roadmap...', 
      body: '<p>Hi engineering team,</p><br><p>We are officially kicking off the new Dashboard UI upgrade project tomorrow morning. Let\'s meet at 10 AM EST.</p><br><p><strong>Agenda:</strong></p><ol><li>Review of the finalized Figma mockups from the design team.</li><li>Discussion on React vs Angular architectural choices.</li><li>API integration and mock data scheduling (who is doing what).</li><li>QA and loading state expectations (we need skeletons everywhere).</li></ol><br><p>Please review the attached UX guild document before the meeting so we can skip the standard boilerplate intro and get right into the technical weeds.</p><br><p>Best,<br>Alice</p>',
      date: 'Oct 25',
      read: true,
      type: 'starred'
    },
    {
      id: 'e35',
      sender: 'HR Department',
      subject: 'IMPORTANT: Updated 2026 Remote Work Policy',
      preview: 'Please read the attached PDF regarding the updated hybrid work mandates...',
      body: '<p>Hello everyone,</p><br><p>Following out recent town hall, we have finalized the updated Remote Work Policy for the upcoming calendar year.</p><br><p><strong>Key Changes:</strong></p><ul><li>Employees are now required to be in-office for a minimum of 2 days per week (Tuesdays and Thursdays are designated core collaboration days).</li><li>Home office stipends have been increased to $1,000 annually.</li></ul><br><p>Please acknowledge receipt of this email by Friday.</p>',
      date: 'Oct 01',
      read: true,
      type: 'starred'
    },

    // --- ARCHIVE ---
    { 
      id: 'e102', 
      sender: 'HR Department', 
      subject: 'Upcoming Holiday Schedule & Payroll', 
      preview: 'Please note the office will be closed from Dec 24th to Jan 2nd...', 
      body: '<p>Hello team,</p><br><p>Please note the office will be closed for the holiday season starting Dec 24th. Regular hours will resume on Jan 2nd.</p><br><p>Because the bank holidays interrupt our standard payroll schedule, all final paychecks for the year will be deposited slightly early on Dec 22nd. Please verify that your direct deposit settings are correct in the Workday portal before the cutoff on Dec 15th.</p><br><p>Happy holidays everyone!</p>',
      date: 'Oct 18',
      read: true,
      type: 'archive'
    },
    {
      id: 'e36',
      sender: 'IT Support',
      subject: 'Resolved: VPN Connectivity Issues',
      preview: 'Your recent IT ticket regarding the VPN failing to connect on macOS Sonoma has been resolved...',
      body: '<p>Your IT support ticket has been marked as <strong>Resolved</strong>.</p><br><p><strong>Resolution Notes:</strong> Over the weekend, Cisco pushed a forced client update that broke compatibility with the latest macOS kernel. We have rolled back the gateway server requirement. Please reboot your machine and reconnect.</p><br><p>If you continue to experience issues, reply to this email to reopen the ticket.</p>',
      date: 'Sep 10',
      read: true,
      type: 'archive'
    },
    {
      id: 'e37',
      sender: 'DocuSign',
      subject: 'Completed: Employment Agreement 2024.pdf',
      preview: 'All parties have successfully completed the signing process for the attached document.',
      body: '<p>Congratulations!</p><br><p>All parties have successfully completed the signing process. The fully executed document "Employment Agreement 2024.pdf" is securely stored in your DocuSign account and a copy is attached to this email.</p>',
      date: 'Jan 05',
      read: true,
      type: 'archive'
    },

    // --- SPAM ---
    {
      id: 'e38',
      sender: 'Prince Alwaleed',
      subject: '$10,000,000 USD WIRE TRANSFER WAITING',
      preview: 'DEAR SIR/MADAM, I HAVE A PROPOSITION FOR YOU THAT WILL BENEFIT BOTH OF US IMMENSELY...',
      body: '<p>DEAR SIR/MADAM,</p><br><p>I HAVE A PROPOSITION FOR YOU THAT WILL BENEFIT BOTH OF US IMMENSELY. I HAVE RECENTLY INHERITED THE SUM OF $10,000,000 USD FROM A DISTANT RELATIVE, BUT DUE TO TAX LAWS IN MY COUNTRY, I CANNOT ACCESS IT DIRECTLY.</p><br><p>IF YOU SEND ME $500 TO PAY THE TRANSFER FEE, I WILL SEND THE ENTIRE $10,000,000 TO YOUR BANK ACCOUNT WHERE YOU CAN KEEP 20% FOR YOUR TROUBLES.</p><br><p>PLEASE REPLY WITH YOUR SOCIAL SECURITY NUMBER.</p>',
      date: 'Oct 28',
      read: false,
      type: 'spam'
    },
    {
      id: 'e39',
      sender: 'Norton Antivirus',
      subject: 'Warning! Your subscription has expired!',
      preview: 'Your computer is at risk of being infected by 53 viruses. Renew now...',
      body: '<p style="text-align: center; color: red; font-size: 24px; font-weight: bold;">WARNING!</p><br><p style="text-align: center;">Your Norton Antivirus subscription expired 300 days ago. Your computer is currently at risk of being infected by 53 viruses.</p><br><div style="text-align: center;"><a href="#" style="background: red; color: white; padding: 15px 30px; font-weight: bold; text-decoration: none; border-radius: 4px; display: inline-block;">RENEW SECURELY NOW</a></div>',
      date: 'Oct 27',
      read: false,
      type: 'spam'
    },
    {
      id: 'e40',
      sender: 'Crypto Giveaway',
      subject: 'Elon Musk is giving away 5,000 BTC!',
      preview: 'Verify your wallet to receive your share of the massive Bitcoin giveaway...',
      body: '<p>To celebrate the successful launch of Starship, Elon Musk is giving back to the community!</p><br><p>Send between 0.1 and 5 BTC to the address below, and you will receive double the amount back instantly.</p><br><p style="font-family: monospace; background: #f0f0f0; padding: 10px;">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</p><br><p>Hurry! The giveaway ends when the pool runs out.</p>',
      date: 'Oct 25',
      read: false,
      type: 'spam'
    }
  ];
};
