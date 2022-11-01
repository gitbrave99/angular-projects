import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchtheMovieDb, Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class ThemoviedbService {
  private _apiKey: string = '6b932025ba5cc69e9778e12ecc5a77c4';
  private _urlApi2: string = 'https://api.themoviedb.org/3';
  private _urlFinal:string=''


  nextPrevPage: number = 1;
  totalRecords:number=0;
  totalPages:number=0

  private _listMovies: Movie[] = [];
  listHistorial:string[]=["als"]
  constructor(private http: HttpClient) {
    this.listHistorial= JSON.parse(localStorage.getItem("historial")!)||[]
  }

  get listMovies() {
    return [...this._listMovies];
  }

  nextprevPageMovie(d: number) {
    if (this.nextPrevPage < 1000 && this.nextPrevPage > 0) {
      this.nextPrevPage =d > 0 ? (this.nextPrevPage += 1) : this.nextPrevPage ===1?1: (this.nextPrevPage -= 1);
      this.getPopularMovies();
    }
  }

  getPopularMovies(titulo?:string) {
    let params = new HttpParams()
    .set('api_key', this._apiKey).set('page', this.nextPrevPage);
    this._urlFinal=this._urlApi2+"/movie/popular"

    if (titulo != undefined && titulo !==''){
      titulo=titulo.trim().toLocaleLowerCase()
      if (!this.listHistorial.includes(titulo)){
        this.listHistorial.unshift(titulo)
        this.listHistorial=this.listHistorial.splice(0,10)

        localStorage.setItem("historial",JSON.stringify(this.listHistorial))
        params = new HttpParams()
        .set('api_key', this._apiKey).set('page', this.nextPrevPage).set('query',titulo!);
        this._urlFinal=this._urlApi2+"/search/movie"
      }
    }

    this.http
      .get<SearchtheMovieDb>(`${this._urlFinal}`, { params })
      .subscribe((res) => {
        console.log(res);
        this.totalPages=res.total_pages
        this.totalRecords=res.total_results
        this._listMovies = res.results;
      });
  }
}
