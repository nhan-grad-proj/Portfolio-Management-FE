import { HttpClientAdapter } from '../adapters/axios-http-client.adapter';
import { AuthorizedHttpClientAdapter } from '../adapters/authorized-http-client.adapter';
import { persistentStorage } from '../../app/internal/persistent.storage';

const axios = require('axios').create({
  url: process.env.NEXT_PUBLIC_API_ENDPOINT ?? 'http://localhost:8080'
});

export const httpClientAdapter = new HttpClientAdapter(axios);

export const authorizedHttpClient = new AuthorizedHttpClientAdapter(
  httpClientAdapter,
  persistentStorage
);
