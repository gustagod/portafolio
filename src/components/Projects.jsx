import React from 'react'
import './style/Projects.css'

const Projects = () => {

  const handelweather=()=>{
    window.open('https://proyecto2-gamma.vercel.app/','_blank')
  }

  const handelrickandmorty=()=>{
    window.open('https://proyecto3-mauve.vercel.app/','_blank')
  }

  const handelpokemon=()=>{
    window.open('https://proyecto5-ten.vercel.app/','_blank')
  }


  return (
    <div className='projects__div'>
      <ul className='projects__ul'>
        <li className='projects__li' onClick={handelweather}>
          <img src="../../Projects/weather.PNG" alt="" className='projects__img'/>
          <span className='projects__span'>Web app para ver el clima de tu localidad, utillizando react,js,html y css</span>
        </li>
        <li className='projects__li' onClick={handelrickandmorty}>
          <img src="../../Projects/rick.PNG" alt="" className='projects__img'/>
          <span className='projects__span'>Web app de una biblioteca de los personajes de rick y morty, utillizando api, react, js, html y css</span>
        </li>
        <li className='projects__li' onClick={handelpokemon}>
          <img src="../../Projects/poke.PNG" alt="" className='projects__img'/>
          <span className='projects__span'>Web app de uan biblioteca de los pokemons utilizando api, react, js, html y css</span>
        </li>
      </ul>
    </div>
  )
}

export default Projects