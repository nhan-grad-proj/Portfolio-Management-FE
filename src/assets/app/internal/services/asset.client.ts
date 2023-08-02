import {
  AssetOverview,
  AssetSearchResult,
  AssetsUsecase
} from '../../../domain/assets.usecase';
import { Pagination } from '../../../../system/domain/entities/pagination.types';
import { authorizedHttpClient } from '../../../../system/infrastructure/factories/http-client.factories';

export const assetClient: AssetsUsecase = {
  getOverview(): Promise<AssetOverview[]> {
    return authorizedHttpClient.request({
      method: 'get',
      url: '/assets/'
    });
  },
  async search(symbol: string): Promise<AssetSearchResult[]> {
    const response = await authorizedHttpClient.request<
      Pagination<AssetSearchResult>
    >({
      method: 'get',
      url: '/assetinfos/',
      params: {
        search: symbol
      }
    });
    return response;
  }
};
