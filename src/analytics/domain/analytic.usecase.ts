export type HoldingModel = {
  holding: string;
  amount: number;
  currentValue: number;
  currency: string;
  totalProfit: string;
  IRR: string;
};

export interface Performer {
  id: number;
  ticker_symbol: string;
  gained_amount_in_usd: number;
  percentage: number;
}

export type InvestmentAnalysisResults = {
  id: number;
  total_invested: number;
  total_value: number;
  total_profit: number;
  best_performer: Performer;
  worst_performer: Performer;
};

export type AnalyticUseCase = {
  getHoldings: () => Promise<HoldingModel[]>;
  getInvestmentAnalysisResults: (
    portfolioId: number
  ) => Promise<InvestmentAnalysisResults>;
};
