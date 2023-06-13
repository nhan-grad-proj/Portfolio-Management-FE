import {
  HttpClient,
  HttpRequest,
  HttpResponse
} from 'src/system/app/external/http-client';
import { PersistentStorage } from '../../domain/usecases/persistent-storage';

export class AuthorizedHttpClientAdapter implements HttpClient {
  constructor(
    private httpClient: HttpClient,
    private storage: PersistentStorage
  ) {}

  request<T>(data: HttpRequest): Promise<HttpResponse<T>> {
    const accessToken = this.storage.getAccessToken();

    if (accessToken) {
      Object.assign(data.headers, {
        authorization: accessToken
      });
    }

    return this.httpClient.request(data);
  }
}
