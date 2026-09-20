export interface SaasKPI {
  id: string;
  label: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
  trendContext: string;
  isGood: boolean;
}

export interface SaasEvent {
  customer: string;
  plan: string;
  event: 'Signup' | 'Upgrade' | 'Cancellation' | 'Downgrade';
  mrrImpact: number;
}

export interface ChartDataset {
  label: string;
  data: number[];
}

export interface SaasData {
  kpis: SaasKPI[];
  events: SaasEvent[];
  mrrChart: {
    labels: string[];
    datasets: ChartDataset[];
  };
  tierChart: {
    labels: string[];
    datasets: ChartDataset[];
  };
  usersChart: {
    labels: string[];
    datasets: ChartDataset[];
  };
}

export const fetchSaasData = async (): Promise<SaasData> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    kpis: [
      { id: 'mrr', label: 'Monthly Recurring Revenue', value: '$24,592.50', trend: '+4.2%', trendDirection: 'up', trendContext: 'from last month', isGood: true },
      { id: 'active', label: 'Active Subscribers', value: '1,824', trend: '+84', trendDirection: 'up', trendContext: 'net new this month', isGood: true },
      { id: 'churn', label: 'Churn Rate', value: '1.2%', trend: '-0.4%', trendDirection: 'down', trendContext: 'improved from last month', isGood: true },
      { id: 'ltv', label: 'Customer LTV', value: '$1,248.00', trend: '+$12.50', trendDirection: 'up', trendContext: 'from last quarter', isGood: true }
    ],
    events: [
      { customer: 'Acme Corp', plan: 'Enterprise', event: 'Upgrade', mrrImpact: 15.00 }, // Scaled down for realism or let's keep original
      { customer: 'Acme Corp', plan: 'Enterprise', event: 'Upgrade', mrrImpact: 150.00 },
      { customer: 'Stark Industries', plan: 'Pro', event: 'Signup', mrrImpact: 49.00 },
      { customer: 'Wayne Ent', plan: 'Basic', event: 'Downgrade', mrrImpact: -30.00 },
      { customer: 'Globex Inc', plan: 'Pro', event: 'Cancellation', mrrImpact: -49.00 },
      { customer: 'Soylent', plan: 'Enterprise', event: 'Signup', mrrImpact: 199.00 },
      { customer: 'Initech', plan: 'Basic', event: 'Signup', mrrImpact: 19.00 },
    ].slice(1), // Removed index 0 glitch duplicate
    mrrChart: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        { label: 'New MRR', data: [850, 920, 1050, 1200, 1150, 1400] },
        { label: 'Expansion MRR', data: [200, 250, 220, 310, 420, 380] },
        { label: 'Churned MRR', data: [-150, -210, -180, -120, -160, -110] }
      ]
    },
    tierChart: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        { label: 'Basic', data: [1620, 1680, 1750, 1820, 1890, 1910, 1960, 2010, 2050, 2110, 2130, 2150] },
        { label: 'Pro', data: [510, 560, 590, 630, 680, 715, 740, 760, 790, 820, 835, 840] },
        { label: 'Enterprise', data: [120, 140, 155, 180, 205, 225, 240, 265, 275, 290, 305, 310] }
      ]
    },
    usersChart: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        { label: 'MAU', data: [1120, 1180, 1250, 1310, 1420, 1450, 1530] },
        { label: 'DAU', data: [310, 340, 320, 360, 410, 390, 430] }
      ]
    }
  };
};
