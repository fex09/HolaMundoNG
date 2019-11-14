import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  @Output() addNewMovie = new EventEmitter<{title: string, image: string, year:number, gender:string}>();

/*   public title : string;
  public year : number;
  public gender : string;
  public image : string; */

  public movie: {title: string, image: string, year:number, gender:string};

  //declaración de un constructor en typescript
  constructor() {
    this.movie = {title:'',image:'',year:0,gender:''};
   }

  ngOnInit() {
  }
  //declaración de una función en typescript
  public addMovie():void{
    /* let movie = {
      title: this.title,
      image: this.image,
      year: this.year,
      gender: this.gender
    }; */
    this.addNewMovie.emit(this.movie);
  }
}
