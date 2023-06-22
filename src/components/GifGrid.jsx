import { GifItem } from "../components";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category, key}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        // isLoading ? (<h4> Cargando... </h4>) : null
        isLoading && (<h3> Cargando... </h3>)
      }
      
      <div className="card-grid">
        {
          images.map( ( image ) => (
            <GifItem 
              key={ image.id}
              // Otra forma de enviar props
              { ...image } // Se utiliza para enviar todos los elementos dentro del arreglo
            />
          ))
        }
      </div>
    </>
  )
}
