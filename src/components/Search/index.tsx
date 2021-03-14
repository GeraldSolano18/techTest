import React, { useState } from 'react'
// import {setCountryByName} from '../../redux/actions/CountryAction'
 import {Input} from '../Input'
 import '../../assets/styles/components/Search/search.scss'
// import { useDispatch } from 'react-redux'
export function Search() {
    //Crea un estado local para manejar el valor del input 
  const [inputValue, setInputValue] = useState('')
 // const dispatch = useDispatch()

  //Filtramos el nombre 
  const filterByName = (e) => {
      //ejecutamos la funcion del estado local y pasamos el valor que esta escrito en el input
    setInputValue(e.target.value)
     //le mandamos al actionCreator el valor que esta escrito en el input
 //   dispatch(setCountryByName(e.target.value))
  }
  //LImpiamos el valor del estado global y del local
  const clearInput = () => {
  //  dispatch(setCountryByName(''))
    setInputValue('')
  }
  return (
    <div className='search-container'>
      {
        inputValue &&
        <i className='fas fa-times close' onClick={clearInput}></i>
      }
      <Input placeholder="Search for a country..." value={inputValue} onChange={filterByName} />
    </div>
  )
}

export default Search