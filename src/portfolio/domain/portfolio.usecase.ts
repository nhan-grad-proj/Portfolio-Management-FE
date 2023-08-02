import { AssetOverview } from '../../assets/domain/assets.usecase';

export type Portfolio = {
  id: number;
  name: string;
  best_performer: BestPerformer;
  worst_performer: WorstPerformer;
  description: string;
  created_at: string;
  user: number;
};

export type BestPerformer = {
  id: number;
  ticker_symbol: string;
  gained_amount_in_usd: number;
};

export type WorstPerformer = {
  id: number;
  ticker_symbol: string;
  gained_amount_in_usd: number;
};

export type CreatePortfolioPayload = {
  name: string;
  description: string;
};

export type PortfolioDetail = Portfolio & {
  assets: AssetOverview[];
};

export type PortfolioUseCase = {
  getAll: () => Promise<Portfolio[]>;
  getDetail: (portfolioId: number) => Promise<PortfolioDetail>;
  createOne: (payload: CreatePortfolioPayload) => Promise<void>;
  deleteOne: (portfolioId: number) => Promise<void>;
};
