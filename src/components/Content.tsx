import { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import { api } from '../services/api';

import '../styles/content.scss';

interface GenreId {
  genreId:number;
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

export function Content(props: GenreId) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`genres/${props.genreId}/movies`).then(response => {
      setMovies(response.data);
    });
  }, []);

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