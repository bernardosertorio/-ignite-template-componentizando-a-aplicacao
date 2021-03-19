import { useState } from 'react';
import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="container">
        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard 
                key ={movie.imdbID} 
                title={movie.Title} 
                poster={movie.Poster} 
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} 
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}