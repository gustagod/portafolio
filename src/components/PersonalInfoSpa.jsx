import './style/PersonalInfo.css'

const PersonalInfoSpa = () => {

  return (
    <div className='div__per'>
      <section className='per__section'>
        <h1 className='per__h1'>Hola soy <span>Gustavo</span></h1>
        <p className='per__p'>Soy un programador web fullstack, cuento con la carrera de ingenieria mecatronica</p>
      </section>

      <section>
        <h3>Cuento con conocimiento en</h3>
        <ul>
          <li><img src="../../html.svg" alt="" /><span>HTML</span></li>
          <li><img src="../../js.svg" alt="" /><span>JavaScript</span></li>
          <li><img src="../../css.svg" alt="" /><span>CSS</span></li>
          <li><img src="../../react.svg" alt="" /><span>React JS</span></li>
        </ul>
      </section>

      <section>
        <h3>Proyectos en los que he trabajado</h3>
        <ul>
          <li>Applicacion de clima</li>
          <li>Applicacion biblioteca Rick y morty</li>
          <li>Aplicacion usuarios</li>
          <li>Applicacion bilbioteca Pokemon</li>
        </ul>
      </section>

      <section>
        <h3>Estudios</h3>
        <ul>
          <li>Ingenieria Mecatronica, Instituto tecnologico de Sonora</li>
          <li>Curso pogramacion web full stack, Academlo </li>
        </ul>
      </section>

      <section>
        <h3>Contactame</h3>
        <article>
          <ul>
            <li>
              <form action="">
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

            <li>o</li>
            <li>
              <h3>Redes</h3>
              <ul>
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