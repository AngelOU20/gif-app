import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  // useEffect -- es un hooks, que sirve para disparar efectos secundarios, se entiende por efecto secundario a un proceso que se quiere ejecutar cuando algo suceda.
  useEffect( () => {
    getImages();
    // Se agrega [] para el hook se disparada la primera vez que se ejecuta el componente
  }, []);


  return {
    images,
    isLoading
  }
  
}
