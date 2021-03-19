import { useState } from 'react';

import '../styles/header.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function Header() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="headerContainer">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
      </div>
    </div>
    )
}