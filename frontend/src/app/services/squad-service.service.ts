import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';


@Injectable({
  providedIn: 'root'
})
export class SquadServiceService {

  url = `http://localhost:8080/cliente`

  constructor(private http: HttpClient) { }

  public getAllMembers(): Observable<Person[]> {
    return this.http.get<Person[]>(
      this.url
    )
  }

  public remove(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  public post(people: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(people);
    return this.http.post(this.url, body, { 'headers': headers })
  }

  public updateMember(people: Person): Observable<Object> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(people);
    return this.http.put(this.url, body, { 'headers': headers })
  }


}
