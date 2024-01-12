import React from 'react'
import './style/Lenguages.css'

const Lenguages = () => {
  return (
    <div className='lenguage__div'>
      <ul className='lengueage__ul'>
        <li className='lenguage__li'><img src="../../Lengueges/js.svg" alt="" className='lenguage__img' /><span className='lenguage__span'>JavaScript</span></li>
        <li className='lenguage__li'><img src="../../Lengueges/html.svg" alt="" className='lenguage__img' /><span className='lenguage__span'>HTML</span></li>
        <li className='lenguage__li'><img src="../../Lengueges/css.svg" alt="" className='lenguage__img' /><span className='lenguage__span'>CSS</span></li>
        <li className='lenguage__li'><img src="../../Lengueges/react.svg" alt="" className='lenguage__img' /><span className='lenguage__span'>React</span></li>
        <li className='lenguage__li'><img src="../../Lengueges/nodejs.svg" alt="" className='lenguage__img' /><span className='lenguage__span'>NodeJs</span></li>
        <li className='lenguage__li'><img src="../../Lengueges/typescript.svg" alt="" className='lenguage__img' /><span className='lenguage__span'>TypeScript</span></li>
        <li className='lenguage__li'><img src="../../Lengueges/postgresql.svg" alt="" className='lenguage__img' /><span className='lenguage__span'>PostgreSQL</span></li>
        <li className='lenguage__li'><img src="../../Lengueges/gm2.svg" alt="" className='lenguage__img' /><span className='lenguage__span'>GameMaker Studio 2</span></li>
      </ul>
    </div>
  )
}

export default Lenguages