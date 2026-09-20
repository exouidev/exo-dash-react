export type Timeframe = '1D' | '1W' | '1M' | '1Y';

export interface FinanceKPI {
  id: string;
  label: string;
  value: string;
  trendHtmlNode?: string; 
  subtext?: string;
  isGood?: boolean;
}

export interface Trade {
  date: string;
  asset: string;
  type: 'Buy' | 'Sell' | 'Transfer';
  shares: string;
  amount: number;
}

export interface FinanceData {
  kpis: FinanceKPI[];
  recentTrades: Trade[];
  lineChart: {
    labels: string[];
    data: number[];
  };
  doughnutChart: {
    labels: string[];
    data: number[];
  };
}

const generateLineData = (rangeMode: Timeframe) => {
  let data = [];
  let labels = [];
  let intervals = rangeMode === '1D' ? 24 : (rangeMode === '1W' ? 7 : (rangeMode === '1M' ? 30 : 52));
  let timeStep = rangeMode === '1D' ? 3600000 : 86400000;
  if (rangeMode === '1Y') timeStep = 86400000 * 7;

  let time = new Date().getTime() - (intervals * timeStep);
  let currentPrice = 175.50;

  for (let i = 0; i < intervals; i++) {
      let volatility = rangeMode === '1Y' ? 4 : (rangeMode === '1D' ? 0.8 : 2);
      let change = (Math.random() - 0.48) * volatility;
      currentPrice += change;
      data.push(parseFloat(currentPrice.toFixed(2)));
      let d = new Date(time);
      if (rangeMode === '1D') labels.push(d.getHours() + ':00');
      else labels.push(d.toLocaleDateString(undefined, {month: 'short', day: 'numeric'}));
      time += timeStep;
  }
  return { data, labels };
};

export const fetchFinanceData = async (timeframe: Timeframe): Promise<FinanceData> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const { data: lineData, labels: lineLabels } = generateLineData(timeframe);

  return {
    kpis: [
      { id: 'portfolio', label: 'Total Portfolio Value', value: '$142,390.50', trendHtmlNode: '+$12,450.00 (9.58%)', isGood: true },
      { id: 'volume', label: '24h Volume', value: '$84,102.00', subtext: 'Across 12 assets' },
      { id: 'cash', label: 'Available Cash', value: '$18,450.00', subtext: 'Ready to deploy' },
      { id: 'ytd', label: 'YTD Return', value: '+24.8%', trendHtmlNode: 'Outperforming S&P 500', isGood: true }
    ],
    recentTrades: [
      { date: 'Oct 14, 2023', asset: 'AAPL', type: 'Buy', shares: '50', amount: 8850.50 },
      { date: 'Oct 12, 2023', asset: 'BTC', type: 'Sell', shares: '0.25', amount: 9200.00 },
      { date: 'Oct 10, 2023', asset: 'TSLA', type: 'Buy', shares: '15', amount: 3750.00 },
      { date: 'Oct 08, 2023', asset: 'USD Deposit', type: 'Transfer', shares: '-', amount: 15000.00 },
      { date: 'Oct 05, 2023', asset: 'MSFT', type: 'Sell', shares: '20', amount: 6600.00 },
    ],
    lineChart: {
      labels: lineLabels,
      data: lineData
    },
    doughnutChart: {
      labels: ['Stocks', 'Crypto', 'Bonds', 'Cash'],
      data: [45, 25, 20, 10]
    }
  };
};
