import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { ICollection } from '../models/http/model';

@Injectable({
  providedIn: 'root'
})
export class SpaceHttpService {

  constructor(private http: HttpClient) {}
  getPictures(search: string) {
    const params: Params = new HttpParams().set('q', search);

      return this.http.get('https://images-api.nasa.gov/search', {params}).pipe(
        map((data: any): ICollection => data.collection),
        map((collection) => collection.items)
      )
  }
}
