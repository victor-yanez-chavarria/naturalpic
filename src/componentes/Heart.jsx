import { useContext } from 'react';
import { Context } from '../contexts/FotoContext';

export default function Heart({ id }) {
  const { fotos, setFotos } = useContext(Context);
  const fotoFavorita = fotos.find((foto) => foto.id === id);

  function handleClick() {
    fotoFavorita.liked = !fotoFavorita.liked;
    const newFotos = [...fotos];
    setFotos(newFotos);
  }

  const color = fotoFavorita.liked ? 'red' : 'white';

  return (
    <span className="heart" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill={color}
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </span>
  );
}
