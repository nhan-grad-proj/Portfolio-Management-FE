import {
  AssetSearchResult,
  AssetsUsecase
} from '../../../domain/assets.usecase';
import { Pagination } from '../../../../system/domain/entities/pagination.types';
import { authorizedHttpClient } from '../../../../system/infrastructure/factories/http-client.factories';

export const assetClient: AssetsUsecase = {
  async search(symbol: string): Promise<AssetSearchResult[]> {
    const { results } = await authorizedHttpClient.request<
      Pagination<AssetSearchResult>
    >({
      method: 'get',
      url: '/assets/all/',
      params: {
        search: symbol
      }
    });

    return results;
  }
};