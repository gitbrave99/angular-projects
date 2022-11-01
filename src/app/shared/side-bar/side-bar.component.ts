import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../themoviedb/services/themoviedb.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {
  constructor(private movieservice: ThemoviedbService) {}

  get historial() {
    return this.movieservice.listHistorial;
  }

  getPopularMovies(){
    this.movieservice.getPopularMovies()
  }
  searchMovie(item: string) {
    console.log(item);

    this.movieservice.getPopularMovies(item);
  }

  ngOnInit(): void {}
}
