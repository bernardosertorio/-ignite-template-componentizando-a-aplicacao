import '../styles/header.scss';

interface GenreResponseProps {
  genreTitle: {
    title: string;
  }
}

export function Header(props: GenreResponseProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="headerContainer">
        <header>
          <span className="category">Categoria:<span>{props.genreTitle.title}</span></span>
        </header>
      </div>
    </div>
    )
}