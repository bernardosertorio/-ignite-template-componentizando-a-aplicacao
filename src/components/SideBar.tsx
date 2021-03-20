import { useEffect, useState } from 'react';

import { Button } from './Button';
import { Header } from './Header';
import { Content } from './Content';
import { api } from '../services/api';

import '../styles/sidebar.scss';

interface GenreResponse {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {
  const [genres, setGenres] = useState<GenreResponse[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponse>({} as GenreResponse);

  useEffect(() => {
    api.get<GenreResponse[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  api.get<GenreResponse>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    }), [selectedGenreId];

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>

      <Header genreTitle={selectedGenre}/>
      <Content genreId={selectedGenreId}/>
    </div>
  )
}