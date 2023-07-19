export type AssetSearchResult = {
  symbol: string;
  current_price: string;
  type: string;
};

export type AssetsUsecase = {
  search(symbol: string): Promise<AssetSearchResult[]>;
};
