export interface EcommerceKPI {
  id: string;
  label: string;
  value: string;
  trend: number;
}

export interface Transaction {
  id: string;
  name: string;
  status: string;
  amount: number;
  date: string;
}

export interface EcommerceData {
  kpis: EcommerceKPI[];
  transactions: Transaction[];
  revenueData: {
    labels: string[];
    data: number[];
  };
  categoryData: {
    labels: string[];
    data: number[];
  };
}

export const fetchEcommerceData = async (): Promise<EcommerceData> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    kpis: [
      { id: '1', label: 'Total Revenue', value: '$45,231.89', trend: 20.1 },
      { id: '2', label: 'Subscriptions', value: '+2,350', trend: 180.1 },
      { id: '3', label: 'Sales', value: '+12,234', trend: 19 },
      { id: '4', label: 'Active Now', value: '573', trend: -2.5 }
    ],
    transactions: [
      { id: 'INV001', name: 'John Doe', status: 'Completed', amount: 250.00, date: '2023-10-01' },
      { id: 'INV002', name: 'Jane Smith', status: 'Pending', amount: 150.00, date: '2023-10-02' },
      { id: 'INV003', name: 'Bob Johnson', status: 'Failed', amount: 350.00, date: '2023-10-03' },
      { id: 'INV004', name: 'Alice Brown', status: 'Completed', amount: 450.00, date: '2023-10-04' },
      { id: 'INV005', name: 'Charlie Davis', status: 'Completed', amount: 125.00, date: '2023-10-05' },
      { id: 'INV006', name: 'Diana Evans', status: 'Pending', amount: 550.00, date: '2023-10-06' },
      { id: 'INV007', name: 'Evan Frank', status: 'Completed', amount: 75.00, date: '2023-10-07' },
    ],
    revenueData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490]
    },
    categoryData: {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      data: [45, 35, 20]
    }
  };
};
