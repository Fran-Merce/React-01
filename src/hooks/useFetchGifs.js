import { useState } from "react"
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (category)=>{
  const [state, setState] = useState({
    data:[],
    loading:true
  });

  
  useEffect(() => {
    getGifs(category)
      .then(imgs =>
      setTimeout(() => {
        setState({
          data:imgs,
          loading:false
        })
      }, 3000))
  }, [category]); //El useffect con el array vacio hace la funcion se llame una sola vez|| si la categoria cambia vuelve a ejecutar el useEffect (No va a cambiar en este caso por la logica del)
  
 

  return state
}