import {
  AnalyticUseCase,
  HoldingModel,
  InvestmentAnalysisResults
} from '../../../domain/analytic.usecase';

export const analyticClient: AnalyticUseCase = {
  getHoldings(): Promise<HoldingModel[]> {
    return Promise.resolve([]);
  },
  getInvestmentAnalysisResults(): Promise<InvestmentAnalysisResults> {
    return Promise.resolve({
      totalValue: '0',
      totalProfit: '0',
      IRR: '0',
      lost: '0'
    });
  }
};
