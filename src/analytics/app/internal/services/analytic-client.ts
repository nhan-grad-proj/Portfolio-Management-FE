import {
  AnalyticUseCase,
  HoldingModel,
  InvestmentAnalysisResults
} from '../../../domain/analytic.usecase';
import { authorizedHttpClient } from '../../../../system/infrastructure/factories/http-client.factories';

export const analyticClient: AnalyticUseCase = {
  getHoldings(): Promise<HoldingModel[]> {
    return Promise.resolve([]);
  },
  getInvestmentAnalysisResults(
    portfolioId: number
  ): Promise<InvestmentAnalysisResults> {
    return authorizedHttpClient.request({
      method: 'get',
      url: `/portfolios/${portfolioId}/dashboard`
    });
  }
};
