export interface FolderItem {
  id: string
  name: string
  size: string
}

export interface FileItem {
  id: string
  name: string
  type: 'folder' | 'image' | 'video' | 'document' | 'other'
  size: string
  lastModified: string
  thumbnail?: string
}

export interface FileManagerData {
  folders: FolderItem[];
  files: FileItem[];
}

export const fetchFileManagerData = async (): Promise<FileManagerData> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    folders: [
      { id: 'f1', name: 'UI Designs 2026', size: '124' },
      { id: 'f2', name: 'Client Presentations', size: '12' },
      { id: 'f3', name: 'Invoices & Receipts', size: '89' },
      { id: 'f4', name: 'Marketing Assets', size: '43' },
    ],
    files: [
      { id: '1', name: 'Dashboard_Mockup_V2.fig', type: 'document', size: '14.2 MB', lastModified: '2 hrs ago' },
      { id: '2', name: 'Hero_Background.jpg', type: 'image', size: '4.8 MB', lastModified: '3 hrs ago', thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop' },
      { id: '3', name: 'Quarterly_Report_Q3.pdf', type: 'document', size: '2.1 MB', lastModified: '1 day ago' },
      { id: '4', name: 'Promo_Video_Final.mp4', type: 'video', size: '124.5 MB', lastModified: '2 days ago' },
      { id: '5', name: 'Meeting_Notes_Oct.txt', type: 'document', size: '12 KB', lastModified: 'Oct 12, 2026' },
      { id: '6', name: 'Logo_Pack.zip', type: 'other', size: '8.4 MB', lastModified: 'Oct 10, 2026' },
      { id: '7', name: 'Team_Retreat_2026.jpg', type: 'image', size: '3.2 MB', lastModified: 'Oct 05, 2026', thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop' },
      { id: '8', name: 'Product_Roadmap.xlsx', type: 'document', size: '1.5 MB', lastModified: 'Sep 28, 2026' },
      { id: '9', name: 'App_Icon_v1.png', type: 'image', size: '890 KB', lastModified: 'Sep 25, 2026', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop' },
      { id: '10', name: 'Social_Media_Templates.sketch', type: 'document', size: '45.6 MB', lastModified: 'Sep 20, 2026' },
    ]
  };
};
