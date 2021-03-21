import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from '../services/cookie.service';
import { API_CONFIG } from './api.constant';
import {
  ApiConfig,
  ApiHeaders,
  ApiMethodOptions,
  ApiOptions,
  ApiTokenStorageType,
} from './api.type';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    @Inject(API_CONFIG)
    private apiConfig: ApiConfig
  ) {}

  /**
   * GET METHOD
   *
   * @param options : ApiOptions
   *
   * @return T
   */
  public get<T>(options: ApiOptions): Observable<T> {
    const config = options.config ? options.config : this.apiConfig;
    const url = this.getPath(config, options);
    const apiOptions = this.getOptions(config, options);
    return this.http.get<T>(url, {
      headers: apiOptions.headers,
      params: apiOptions.params,
      responseType: apiOptions.responseType,
    });
  }

  /**
   * POST METHOD
   *
   * @param options : ApiOptions
   *
   * @return T
   */
  public post<T>(options: ApiOptions, body: any): Observable<T> {
    const config = options.config ? options.config : this.apiConfig;
    const url = this.getPath(config, options);
    const apiOptions = this.getOptions(config, options);
    return this.http.post<T>(url, body, {
      headers: apiOptions.headers,
      params: apiOptions.params,
      responseType: apiOptions.responseType,
    });
  }

  /**
   * PUT METHOD
   *
   * @param options : ApiOptions
   *
   * @return T
   */
  public put<T>(options: ApiOptions, body: any): Observable<T> {
    const config = options.config ? options.config : this.apiConfig;
    const url = this.getPath(config, options);
    const apiOptions = this.getOptions(config, options);
    return this.http.put<T>(url, body, {
      headers: apiOptions.headers,
      params: apiOptions.params,
      responseType: apiOptions.responseType,
    });
  }

  /**
   * PATCH METHOD
   *
   * @param options : ApiOptions
   *
   * @return T
   */
  public patch<T>(options: ApiOptions, body: any): Observable<T> {
    const config = options.config ? options.config : this.apiConfig;
    const url = this.getPath(config, options);
    const apiOptions = this.getOptions(config, options);
    return this.http.patch<T>(url, body, {
      headers: apiOptions.headers,
      params: apiOptions.params,
      responseType: apiOptions.responseType,
    });
  }

  /**
   * DELETE METHOD
   *
   * @param options : ApiOptions
   *
   * @return T
   */
  public delete<T>(options: ApiOptions): Observable<T> {
    const config = options.config ? options.config : this.apiConfig;
    const url = this.getPath(config, options);
    const apiOptions = this.getOptions(config, options);
    return this.http.delete<T>(url, {
      headers: apiOptions.headers,
      params: apiOptions.params,
      responseType: apiOptions.responseType,
    });
  }

  /**
   * Construct Path for Api Call
   *
   * @param config : ApiConfig
   * @param options : ApiOptions
   *
   * @reurn string;
   */
  private getPath(config: ApiConfig, options: ApiOptions): string {
    let path = '';
    if (config.baseUrl) {
      path = config.baseUrl.trim() + options.apiPath.trim();
    } else {
      if (options.config) {
        path = options.config.baseUrl.trim() + options.apiPath.trim();
      }
    }
    return path;
  }

  /**
   * Construct Options for Api Call
   *
   * @param options : ApiOptions
   *
   * @return any
   */
  private getOptions(config: ApiConfig, options: ApiOptions): ApiMethodOptions {
    const apiOptions: ApiMethodOptions = {};

    // Set Headers
    if (config.headers) {
      apiOptions.headers = config.headers;
    }

    if (apiOptions.headers && options.headers) {
      const keys = options.headers.keys();
      keys.forEach((key) => {
        if (apiOptions.headers && options.headers) {
          let value = options.headers.get(key);
          if (!value) {
            value = '';
          }
          apiOptions.headers = apiOptions.headers.set(key, value);
        }
      });
    } else if (options.headers) {
      apiOptions.headers = options.headers;
    }

    // Set Credentials
    if (
      options.withCredentials === undefined ||
      options.withCredentials === true
    ) {
      let token = '';
      if (
        config.storedIn === ApiTokenStorageType.LOCAL_STORAGE &&
        config.tokenKey
      ) {
        const tokenValue = localStorage.getItem(config.tokenKey);
        if (tokenValue) {
          token = tokenValue;
        }
      }
      if (config.storedIn === ApiTokenStorageType.COOKIE && config.tokenKey) {
        token = this.cookieService.getCookie(config.tokenKey);
      }
      if (token) {
        if (apiOptions.headers) {
          apiOptions.headers = apiOptions.headers.set(
            'Authorization',
            `${config.tokenType} ${token}`
          );
        } else {
          apiOptions.headers = new ApiHeaders({
            Authorization: `${config.tokenType} ${token}`,
          });
        }
      }
    }

    // Set Params
    if (options.params) {
      apiOptions.params = options.params;
    }

    // Set Response Type
    if (options.responseType) {
      apiOptions.responseType = options.responseType;
    }

    // Return Options
    return apiOptions;
  }
}
