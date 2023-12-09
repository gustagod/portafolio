import { useState } from 'react'
import './App.css'
import PersonalInfoSpa from './components/PersonalInfoSpa'
import PersonalInfoEng from './components/PesonalInfoEng'

function App() {
  const [theme, setTheme] = useState('black')
  const [lenguage, setLenguage] = useState('spanish')

  const handelLenguage = () => {
    lenguage === 'spanish' ? setLenguage('english') : setLenguage('spanish')
  }

  const handelTheme = () => {
    theme === 'black' ? setTheme('white') : setTheme('black')
  }

  return (
    <div className={`div__black ${theme === 'white' && 'div__white'}`}>
 
      <header className='header'>
        <h1 className='div__h1-black'>Gustavo Alain Portillo Hernandez</h1>
        <button className='div__btn-l' onClick={handelLenguage}>Lenguaje</button>
        <button className='div__btn-t' onClick={handelTheme}>Tema</button>
        <ul className='div__ul'>
          <li className='ul__li-header'><a href="https://www.linkedin.com/in/gustavo-alain-portillo-hern%C3%A1ndez-b873b35a/" target='_blank'><img className='a__img-h' src="../../linkedin.svg" alt="" /></a></li>
          <li className='ul__li-header'><a href="https://github.com/gustagod" target='_blank'><img className='a__img-h' src="../../github.svg" alt="" /></a></li>
          <li className='ul__li-header'><a href="https://wa.me/526442110065" target="_blank"><img className='a__img-h' src="../../whatsapp.svg" alt="" /></a></li>
        </ul>
      </header>
      <div className='div__info'>
        {
          lenguage === 'spanish' ? <PersonalInfoSpa /> : <PersonalInfoEng />
        }

      </div>


    </div>


  )
}

export default App
