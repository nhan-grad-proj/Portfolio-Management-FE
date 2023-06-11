export type HttpRequest = {
  url: string;
  method: 'post' | 'get' | 'put' | 'delete';
  body?: any;
  headers?: any;
};

export type HttpResponse<T = any> = T;

export class HttpError extends Error {
  constructor(message: string, public code: string) {
    super(message);
  }
}

export interface HttpClient {
  request: <T = any>(data: HttpRequest) => Promise<HttpResponse<T>>;
}
