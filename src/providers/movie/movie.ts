import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3"
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=7332b758091b4cb971dc0d532693ed9a");
  }

  getMovieDetail(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=7332b758091b4cb971dc0d532693ed9a`);
  }

}
