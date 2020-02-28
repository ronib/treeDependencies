import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient ) {

  }

  getDependencies(packageName: string) {
    return this.http.get(`/api/${packageName}/latest/`);
  }

}
