import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Mantener consola del navegador
    if( inputValue.trim().length <= 1 ) return; // Validar

    // setCategories(categories => [ inputValue, ...categories ]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  };

  return (
    <>
      <form action="" onSubmit={ (event) => onSubmit(event) }>  
        <input
          type="text"
          placeholder="Buscar gifs"
          value={ inputValue }
          onChange={ (event) => onInputChange(event)}
        />
      </form>
    </>
  )
}
