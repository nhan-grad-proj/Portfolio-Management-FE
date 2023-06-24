import {
  AnalyticUseCase,
  HoldingModel
} from '../../../domain/analytic.usecase';

export const analyticClient: AnalyticUseCase = {
  getHoldings(): Promise<HoldingModel[]> {
    return Promise.resolve([]);
  }
};
