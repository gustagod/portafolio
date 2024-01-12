import { useState } from 'react'
import './App.css'
import Personal from './components/Personal'
import Projects from './components/Projects'
import Education from './components/Education'
import Lenguages from './components/Lenguages'
import Contacts from './components/Contacts'

function App() {
  const [lenguage, setLenguage] = useState('spanish')
  const [page, setpage] = useState(<Personal/>)

  const handelLenguage = () => {
    lenguage === 'spanish' ? setLenguage('english') : setLenguage('spanish')
  }

  const handelMain=()=>{
    setpage(<Personal/>)
  }
  const handelProjects=()=>{
    setpage(<Projects/>)
  }

  const handelLenguages=()=>{
    setpage(<Lenguages/>)
  }

  const handelEducation=()=>{
    setpage(<Education/>)
  }

  const handelContacts=()=>{
    setpage(<Contacts/>)
  }




  return (
    <div className='app__div'>

      <header className='app__header'>
        <ul className='app__ul1'>
          <li className='app__ul1li'><hr className='app__hr1' /></li>
          <li className='app__ul1li'>
            <ul className='app__ul2'>
              <li><button className='app__btn' onClick={handelMain}><span className='app__ul2lispan'>Inicio</span></button></li>
              <li><button className='app__btn' onClick={handelProjects}><span className='app__ul2lispan'>Proyectos</span></button></li>
              <li><button className='app__btn' onClick={handelLenguages}><span className='app__ul2lispan'>Lenguajes</span></button></li>
              <li><button className='app__btn' onClick={handelEducation}><span className='app__ul2lispan'>Educación</span></button></li>
              <li><button className='app__btn' onClick={handelContacts}><span className='app__ul2lispan'>Contactame</span></button></li>
            </ul>
          </li>

        </ul>
      </header>
      <div className='app__info'>
        {
          page
        }
      </div>
      <hr className='app__hr2' />
    </div>


  )
}

export default App
