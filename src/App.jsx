import { useState } from 'react'
import './App.css'
import PersonalInfoSpa from './components/PersonalInfoSpa'
import PersonalInfoEng from './components/PesonalInfoEng'

function App() {
  const [lenguage, setLenguage] = useState('spanish')

  const handelLenguage = () => {
    lenguage === 'spanish' ? setLenguage('english') : setLenguage('spanish')
  }

  const handelTheme = () => {
    theme === 'black' ? setTheme('white') : setTheme('black')
  }

  return (
    <div className='app__div'>

      <header className='app__header'>
        <h1 className='appheader__h1'>Gustavo Portillo</h1>
        <button className='app__btn-l' onClick={handelLenguage}>L</button>
        <a className='appheader__a1' href="../cv_esp.pdf" download='cv'><button className='app__btn-cv'><i class='bx bx-download'></i></button></a>
        <ul className='appheader__ul'>
          <li className='apphul__li'><a href="https://www.linkedin.com/in/gustavo-alain-portillo-hern%C3%A1ndez-b873b35a/" target='_blank'><img className='a__img-h' src="../../linkedin.svg" alt="" /></a></li>
          <li className='apphul__li'><a href="https://github.com/gustagod" target='_blank'><img className='a__img-h' src="../../github.svg" alt="" /></a></li>
          <li className='apphul__li'><a href="https://wa.me/526442110065" target="_blank"><img className='a__img-h' src="../../whatsapp.svg" alt="" /></a></li>
        </ul>
      </header>
      <div className='app__info'>
        {
          lenguage === 'spanish' ? <PersonalInfoSpa /> : <PersonalInfoEng />
        }

      </div>


    </div>


  )
}

export default App
