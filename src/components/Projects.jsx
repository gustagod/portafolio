import React from 'react'
import './style/Projects.css'


const Projects = ({lan}) => {

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
    lan === 'spanish' ?(
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
          <span className='projects__span'>Web app de una biblioteca de los pokemons utilizando api, react, js, html y css</span>
        </li>
      </ul>
    </div>)
    :(
      <div className='projects__div'>
      <ul className='projects__ul'>
        <li className='projects__li' onClick={handelweather}>
          <img src="../../Projects/weather.PNG" alt="" className='projects__img'/>
          <span className='projects__span'>Web app to check the weather of your city, using react,js,html y css</span>
        </li>
        <li className='projects__li' onClick={handelrickandmorty}>
          <img src="../../Projects/rick.PNG" alt="" className='projects__img'/>
          <span className='projects__span'>Web library from the univers of rick and morty, using api, react, js, html y css</span>
        </li>
        <li className='projects__li' onClick={handelpokemon}>
          <img src="../../Projects/poke.PNG" alt="" className='projects__img'/>
          <span className='projects__span'>Web library of all pokemons, using api, react, js, html y css</span>
        </li>
      </ul>
      </div>
    )
  )
}

export default Projects