import { Component,OnInit } from '@angular/core';
import { ThemoviedbService } from '../services/themoviedb.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls:['./result.component.css']
})
export class ResultsComponent implements OnInit {
  
    totalRecords:number=0;
    totalPages:number=0
    page:number=1;


  constructor(private movieService: ThemoviedbService) {}


  ngOnInit(): void {
    this.getMovies();
  }
  

  get listMovies() {
    return this.movieService.listMovies;
  }

  nextPage() {
    this.movieService.nextprevPageMovie(1);
    console.log("next");
    
  }
  prevPage() {
    this.movieService.nextprevPageMovie(-1);
    console.log("prev");
  }

  getMovies() {
    this.movieService.getPopularMovies();
    this.totalRecords = this.movieService.totalRecords
    this.totalPages = this.movieService.totalPages
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.getMovies();
  }
}
