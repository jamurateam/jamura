import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { ApiService } from '../@core/api/api.service';

@Injectable({
  providedIn: 'root',
})

export class CommonServiceService {

  baseUrl = `https:127.0.0.1:8000`;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getWebsiteDetails() {
    return this.httpClient.get(this.baseUrl + '/core', {
      headers: new HttpHeaders().append(
        'Authorization',
        `Bearer ${localStorage.getItem('token')}`
      ),
    });
  }

}
