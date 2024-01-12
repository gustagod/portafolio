import React from 'react'
import './style/Education.css'

const Education = ({lan}) => {
  return (
    lan === 'spanish' ?(
    <div className='education__div'>
<ul className='education__ul'>
  <li className='education__li'><img src=".\itson.png" alt="" className='education__img' /><span className='education__span1'>Ingeniería Mecatrónica </span><span className='eduaction__span2'>2011-2015</span></li>
  <li className='education__li'><img src=".\academlo.png" alt="" className='education__img' /><span className='education__span1'>Desarrollador web Full Stack </span><span className='eduaction__span2'>2023-2024</span></li>
</ul>
    </div>
    ):
    (
      <div className='education__div'>
      <ul className='education__ul'>
        <li className='education__li'><img src=".\itson.png" alt="" className='education__img' /><span className='education__span1'>Mechatronics Engineering </span><span className='eduaction__span2'>2011-2015</span></li>
        <li className='education__li'><img src=".\academlo.png" alt="" className='education__img' /><span className='education__span1'>Full stack Web developer</span><span className='eduaction__span2'>2023-2024</span></li>
      </ul>
          </div> 
    )
  )
}

export default Education