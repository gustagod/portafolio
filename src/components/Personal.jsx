import './style/Personal.css'

const Personal = ({ lan }) => {
  return (
    <div className='personal__div'>
      {
        lan === 'spanish' ?(
          <div className='personal__div'>
            <h1 className='personal__h1'>Hola soy <span className='personal__span'>"Gustavo"</span></h1>
            <p className='personal__p'>
              Soy un programador web fullstack, Gran capacidad de adaptarme a todo tipo de proyectos con una mente siempre abierta a retos.
            </p>
            </div>
 ):
 (
          <div className='personal__div'>
            <h1 className='personal__h1'>Hi I'm <span className='personal__span'>"Gustavo"</span></h1>
            <p className='personal__p'>
              I'm a full stack programmer, great ability to adapt to all types of projects with always an open mind to challenges.
            </p>
          </div>
 )
      }
    </div>

  )
}

export default Personal