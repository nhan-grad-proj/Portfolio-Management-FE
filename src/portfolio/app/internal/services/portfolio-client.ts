import { Portfolio, PortfolioUseCase } from '../../../domain/portfolio.usecase';
import { authorizedHttpClient } from '../../../../system/infrastructure/factories/http-client.factories';

export const portfolioClient: PortfolioUseCase = {
  getAll(): Promise<Portfolio[]> {
    return authorizedHttpClient.request({
      method: 'get',
      url: '/portfolios/'
    });
  }
};
