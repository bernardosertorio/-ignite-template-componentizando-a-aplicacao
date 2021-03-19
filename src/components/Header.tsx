import '../styles/header.scss';

interface GenreResponseProps {
  genreName: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
}

export function Header(props: GenreResponseProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="headerContainer">
        <header>
          <span className="category">Categoria:<span>{props.genreName.title}</span></span>
        </header>
      </div>
    </div>
    )
}