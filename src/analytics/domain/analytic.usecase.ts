export type HoldingModel = {
  holding: string;
  amount: number;
  currentValue: number;
  currency: string;
  totalProfit: string;
  IRR: string;
};

export type InvestmentAnalysisResults = {
  totalValue: string;
  totalProfit: string;
  lost: string;
  IRR: string;
};

export type AnalyticUseCase = {
  getHoldings: () => Promise<HoldingModel[]>;
  getInvestmentAnalysisResults: () => Promise<InvestmentAnalysisResults>;
};
