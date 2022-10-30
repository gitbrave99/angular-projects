import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../services/themoviedb.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {

  constructor(private movieService:ThemoviedbService) { }
  titulo:string=""

  searchMovie(){
      this.movieService.getPopularMovies(this.titulo);
    
    
  }

}
