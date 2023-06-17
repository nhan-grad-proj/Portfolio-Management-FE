export interface PersistentStorage {
  getAccessToken(): string | null;
  setAccessToken(accessToken: string): void;
}
