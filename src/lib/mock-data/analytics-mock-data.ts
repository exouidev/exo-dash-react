export type TimeRange = '7d' | '30d' | '90d';

export interface KPI {
  sessions: number;
  sessionsGrowth: number;
  conversion: number;
  conversionGrowth: number;
  bounceRate: number;
  bounceGrowth: number;
  duration: string;
  durationGrowth: number;
}

export interface ChartData {
  barChart: {
    labels: string[];
    acquired: number[];
    active: number[];
  };
  radarChart: {
    labels: string[];
    data: number[];
  };
  lineChart: {
    labels: string[];
    datasets: { label: string; data: number[] }[];
  };
  polarChart: {
    labels: string[];
    data: number[];
  };
}

export interface AnalyticsData {
  kpis: KPI;
  charts: ChartData;
}

const generateLineData = (count: number, min: number, max: number) => {
  let series = [];
  for (let i = 0; i < count; i++) series.push(Math.floor(Math.random() * (max - min + 1)) + min);
  return series;
}

export const fetchAnalyticsData = async (timeRange: TimeRange): Promise<AnalyticsData> => {
  // Artificial delay constraint
  await new Promise(resolve => setTimeout(resolve, 500));

  let kpis: KPI;
  switch (timeRange) {
    case '7d': kpis = { sessions: 12450, sessionsGrowth: 4.2, conversion: 2.4, conversionGrowth: 0.8, bounceRate: 42, bounceGrowth: 1.2, duration: '2m 14s', durationGrowth: 3.1 }; break;
    case '90d': kpis = { sessions: 218450, sessionsGrowth: 12.8, conversion: 3.1, conversionGrowth: 2.1, bounceRate: 38, bounceGrowth: -2.4, duration: '3m 05s', durationGrowth: 5.4 }; break;
    default: kpis = { sessions: 48200, sessionsGrowth: 8.4, conversion: 2.8, conversionGrowth: 1.4, bounceRate: 40, bounceGrowth: -0.5, duration: '2m 45s', durationGrowth: 2.1 }; break;
  }

  let acquired = [76, 85, 101, 98, 87, 105];
  let active = [35, 41, 36, 26, 45, 48];
  if (timeRange === '7d') {
    acquired = [44, 55, 41, 67, 22, 43];
    active = [13, 23, 20, 8, 13, 27];
  } else if (timeRange === '90d') {
    acquired = [200, 250, 310, 290, 240, 350];
    active = [100, 130, 120, 95, 110, 180];
  }

  return {
    kpis,
    charts: {
      barChart: {
        labels: ['Direct', 'Organic Search', 'Referral', 'Social', 'Email', 'Paid Ads'],
        acquired,
        active
      },
      radarChart: {
        labels: ['Tech', 'Sports', 'Gaming', 'Finance', 'Design', 'News'],
        data: timeRange === '7d' ? [70, 60, 40, 30, 90, 30] : (timeRange === '90d' ? [85, 45, 35, 55, 100, 25] : [80, 50, 30, 40, 100, 20])
      },
      lineChart: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          { label: '10am', data: generateLineData(7, timeRange === '7d' ? 0 : 20, 90) },
          { label: '12pm', data: generateLineData(7, timeRange === '7d' ? 10 : 30, 100) },
          { label: '2pm', data: generateLineData(7, timeRange === '7d' ? 5 : 40, 90) },
        ]
      },
      polarChart: {
        labels: ['Signups', 'Purchases', 'Returns'],
        data: timeRange === '7d' ? [71, 63, 77] : (timeRange === '90d' ? [85, 74, 91] : [76, 67, 83])
      }
    }
  };
};
