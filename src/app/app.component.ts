import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'HolaMundo';
  public username: string;

  public movies = [{
      title: 'Avengers: Endgame',
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
      year: 2019,
      gender: 'Science Fiction'
    },
    {
      title: 'The Jocker',
      image: 'https://i.pinimg.com/originals/0e/39/d5/0e39d5956e5370dcd7fca84dcb641a58.jpg',
      year: 2019,
      gender: 'Action'
    },
    {
      title: 'IT',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61bMkkwpduL._SY741_.jpg',
      year: 2019,
      gender: 'Terror'
    }
  ];

  public addMovieToList(movie): void{
    this.movies.push(movie);
  }
}
