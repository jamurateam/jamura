import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface ApiConfig {
  baseUrl: string;
  tokenKey?: string;
  tokenType?: ApiTokenType;
  storedIn?: ApiTokenStorageType;
  headers?: ApiHeaders;
}

export enum ApiTokenType {
  BEARER = 'Bearer',
  BASIC = 'Basic',
}

export enum ApiTokenStorageType {
  LOCAL_STORAGE = 'localstorage',
  COOKIE = 'cookie',
}

export interface ApiOptions {
  apiPath: string;
  params?: ApiParams;
  headers?: ApiHeaders;
  responseType?: ApiResponseType;
  withCredentials?: boolean;
  config?: ApiConfig;
}

export class ApiParams extends HttpParams {}

export class ApiHeaders extends HttpHeaders {}

export enum ApiResponseType {
  ARRAY_BUFFER = 'arraybuffer',
  BLOB = 'blob',
  JSON = 'json',
  TEXT = 'text',
}

export interface ApiMethodOptions {
  headers?: ApiHeaders;
  observe?: 'body' | 'events' | 'response';
  params?: ApiParams;
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
}
