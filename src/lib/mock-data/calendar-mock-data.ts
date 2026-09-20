export interface CalendarEvent {
  id: string
  title: string
  date: Date
  type: 'meeting' | 'task' | 'holiday'
}

export const fetchCalendarData = async (): Promise<CalendarEvent[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  return [
    { id: '1', title: 'Product Review', date: new Date(year, month, 15), type: 'meeting' },
    { id: '2', title: 'Design Sprint', date: new Date(year, month, 16), type: 'task' },
    { id: '3', title: 'Q3 Planning', date: new Date(year, month, 5), type: 'meeting' },
    { id: '4', title: 'Company Holiday', date: new Date(year, month, 24), type: 'holiday' },
    { id: '5', title: 'Marketing Sync', date: new Date(year, month, 15), type: 'meeting' }
  ];
};
