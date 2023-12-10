import './style/PersonalInfo.css'

const PersonalInfoSpa = () => {

  return (
    <div className='div__per'>
      <section className='per__section1'>
        <h1 className='section1__h1'>Hola soy <span className='section1h1__span'>"Gustavo"</span></h1>
        <p className='section1__p'>Soy un programador web fullstack, Gran capacidad de adaptarme a todo tipo de proyectos y mi enfoque principal es programación web, pero con una mente siempre abierta a retos.
        </p>
      </section>
      <hr />
      <section className='per__section2'>
        <h3 className='section2__h3'>Experiencia en los lenguajes como</h3>
        <ul className='section2__ul'>
          <li className='section2__li'><img className='section2li__img' src="../../html.svg" alt="" /><span className='section2li__span'>HTML</span></li>
          <li className='section2__li'><img className='section2li__img' src="../../js.svg" alt="" /><span className='section2li__span'>JavaScript</span></li>
          <li className='section2__li'><img className='section2li__img' src="../../css.svg" alt="" /><span className='section2li__span'>CSS</span></li>
          <li className='section2__li'><img className='section2li__img' src="../../react.svg" alt="" /><span className='section2li__span'>React JS</span></li>
        </ul>
      </section>
      <hr />
      <section className='per__section3'>
        <h3 className='section3__h3'>Proyectos en los que he trabajado</h3>
        <ul className='section3__ul'>
          <li className='section3__li'>Applicacion de clima</li>
          <li className='section3__li'>Applicacion biblioteca Rick y morty</li>
          <li className='section3__li'>Aplicacion usuarios</li>
          <li className='section3__li'>Applicacion bilbioteca Pokemon</li>
        </ul>
      </section>
      <hr />
      <section className='per__section4'>
        <h3 className='section4__h3'>Estudios</h3>
        <ul className='section4__ul'>
          <li>Pogramacion web full stack, Academlo </li>
          <li>Ingenieria Mecatronica, Instituto tecnologico de Sonora</li>
        </ul>
      </section>
<hr />
      <section className='section5'>
        <h3 className='section5__h3'>Contactame</h3>
        <article className='section5__article'>
          <ul className='section5article__ul'>
            <li className='section5article__li'>
              <h3>Correo</h3>
              <form className="section5__form">
                <label>
                  <span>Nombre</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Correo</span>
                  <input type="email" />
                </label>
                <label>
                  <span>Mensaje</span>
                  <input type="text" />
                </label>
                <button className="form__btn">Enviar</button>
              </form>
            </li>
            <li className='section5article__li'>
              <h3>Redes</h3>
              <ul className='section5article__ul2'>
                <li><a href="https://www.linkedin.com/in/gustavo-alain-portillo-hern%C3%A1ndez-b873b35a/" target='_blank'><span>Linkedin</span><img src="../../linkedin.svg" alt="" /></a></li>
                <li><a href="https://github.com/gustagod" target='_blank'><span>Github</span><img src="../../github.svg" alt="" /></a></li>
                <li><a href="https://wa.me/526442110065" target="_blank"><span>Whatapp</span><img src="../../whatsapp.svg" alt="" /></a></li>
              </ul>
            </li>
          </ul>
        </article>

      </section>

    </div>


  )
}

export default PersonalInfoSpa