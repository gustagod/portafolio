import { useState, useEffect } from 'react'
import './App.css'
import Personal from './components/Personal'
import Projects from './components/Projects'
import Education from './components/Education'
import Lenguages from './components/Lenguages'
import Contacts from './components/Contacts'

function App() {
  const [language, setLanguage] = useState('spanish')
  const [page, setpage] = useState(<Personal lan={language} />)
  const [id, setid] = useState('Personal')

  useEffect(() => {
    switch (id) {
      case 'Personal':
        setpage(<Personal lan={language} />);
        break;

      case 'Projects':
        setpage(<Projects lan={language} />)
        break;

      case 'Lenguages':
        setpage(<Lenguages lan={language} />)
        break;

      case 'Education':
        setpage(<Education lan={language} />)
        break;

      case 'Contacts':
        setpage(<Contacts lan={language} />)
        break;
    }
  }, [id,language])

  const change = (p) => {
    setid(p)
  }

  const handelLanguage = () => {
    language === 'spanish' ? setLanguage('english') : setLanguage('spanish');

  }


  return (
    <div className='app__div'>
      <button className='app__btnlen' onClick={handelLanguage}>
        {language === 'spanish' ? <span className='app__btnlenspan'>Spanish/English</span> : <span className='app__btnlenspan'>Ingles/Español</span>}
      </button>
      {language === 'spanish' ?
        <header className='app__header'>
          <ul className='app__ul1'>
            <li className='app__ul1li'><hr className='app__hr1' /></li>
            <li className='app__ul1li'>
              <ul className='app__ul2'>
                <li><button className='app__btn' onClick={()=> change('Personal')}><span className='app__ul2lispan'>Inicio</span></button></li>
                <li><button className='app__btn' onClick={()=>change('Projects')}><span className='app__ul2lispan'>Proyectos</span></button></li>
                <li><button className='app__btn' onClick={()=>change('Lenguages')}><span className='app__ul2lispan'>Languajes</span></button></li>
                <li><button className='app__btn' onClick={()=>change('Education')}><span className='app__ul2lispan'>Educación</span></button></li>
                <li><button className='app__btn' onClick={()=>change('Contacts')}><span className='app__ul2lispan'>Contactame</span></button></li>
              </ul>
            </li>
          </ul>
        </header>
        :
        <header className='app__header'>
          <ul className='app__ul1'>
            <li className='app__ul1li'><hr className='app__hr1' /></li>
            <li className='app__ul1li'>
              <ul className='app__ul2'>
                <li><button className='app__btn' onClick={() => change('Personal')}><span className='app__ul2lispan'>Home</span></button></li>
                <li><button className='app__btn' onClick={() => change('Projects')}><span className='app__ul2lispan'>Projects</span></button></li>
                <li><button className='app__btn' onClick={() => change('Lenguages')}><span className='app__ul2lispan'>Lenguages</span></button></li>
                <li><button className='app__btn' onClick={() => change('Education')}><span className='app__ul2lispan'>Studies</span></button></li>
                <li><button className='app__btn' onClick={() => change('Contacts')}><span className='app__ul2lispan'>Contact</span></button></li>

              </ul>
            </li>
          </ul>
        </header>
      }
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
