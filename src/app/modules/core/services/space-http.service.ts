import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { ICollection, IMarsPicturesResponse } from '../models/http/model';

@Injectable({
  providedIn: 'root'
})
export class SpaceHttpService {

  constructor(private http: HttpClient) { }
  getPictures(search: string) {
    const params: Params = new HttpParams().set('q', search);

    return this.http.get('https://images-api.nasa.gov/search', { params }).pipe(
      map((data: any): ICollection => data.collection),
      map((collection) => collection.items)
    )
  }

  getMarsPictures() {
    const params: Params = new HttpParams().set('sol', 10).set('api_key', 'AHxef5eg7Rty7rV1Q1y26GkpqqvnluemzvGZrbDl');

    return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', { params }).pipe(
      map((data: any): IMarsPicturesResponse => data.photos)
    )
  }
}
