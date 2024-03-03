import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = 'http://localhost:5000/api/v1/send-message';
  constructor(private http: HttpClient) { }

  sendMessage(Messages: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.apiUrl, Messages, {observe: 'response'});
  }
}
