import {
  AnalyticUseCase,
  InvestmentAnalysisResults,
  Trending
} from '../../../domain/analytic.usecase';
import { authorizedHttpClient } from '../../../../system/infrastructure/factories/http-client.factories';

export const analyticClient: AnalyticUseCase = {
  getTrending(): Promise<Trending> {
    return authorizedHttpClient.request({
      method: 'get',
      url: '/trendingcontents/'
    });
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
