import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISearchResponse } from '../models/search-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchByInvitationId(id: number): Observable<ISearchResponse[]> {
    const url = environment.applicationSearchServiceUrl + '?invitationId=' + id;
    return this.http.get<ISearchResponse[]>(url);
  }

}
