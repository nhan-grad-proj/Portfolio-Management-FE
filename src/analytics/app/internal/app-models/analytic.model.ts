export type AnalyticColumn = {
  id: number;
  name: string;
  currentPrice: number;
  tickerSymbol: string;
  quantity: string;
  purchasePrice: string;
  purchaseDate: string;
  portfolio: number;
  sumFee: number;
};

export type TrendingItem = {
  tag: string;
  type: 'neutral' | 'positive' | 'negative';
  content: string;
};
export type TrendingViews = {
  tag: TrendingItem[];
  crypto: TrendingItem[];
};
