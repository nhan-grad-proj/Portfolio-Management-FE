import {
  CreatePortfolioPayload,
  Portfolio,
  PortfolioUseCase
} from '../../../domain/portfolio.usecase';
import { authorizedHttpClient } from '../../../../system/infrastructure/factories/http-client.factories';

export const portfolioClient: PortfolioUseCase = {
  createOne(payload: CreatePortfolioPayload): Promise<void> {
    return authorizedHttpClient.request({
      method: 'post',
      url: '/portfolios/',
      data: payload
    });
  },
  getAll(): Promise<Portfolio[]> {
    return authorizedHttpClient.request({
      method: 'get',
      url: '/portfolios/'
    });
  }
};