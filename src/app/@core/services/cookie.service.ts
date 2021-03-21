import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CookieService {
  /**
   * SET Cookie
   *
   * @param name : string
   * @param value : string
   * @param expDays : number
   *
   * @return void
   */
  setCookie(name: string, value: string, expDays?: number): void {
    const date = new Date();
    let cookie = `${name}=${value};`;
    if (expDays) {
      date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
      cookie += `expires=${date.toUTCString()};path=/;`;
    }
    document.cookie = cookie;
  }

  /**
   * GET Cookie
   *
   * @param key : string
   *
   * @reurn string;
   */
  getCookie(key: string): string {
    const mappedKey = `${key}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      while (cookie.charAt(0) === '') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(mappedKey) === 0) {
        return cookie.substring(mappedKey.length, cookie.length);
      }
    }
    return '';
  }

  /**
   * DELETE Cookie
   *
   * @param key : string
   *
   * @return void;
   */
  deleteCookie(key: string): void {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
