import React from 'react'
import './style/Contacts.css'

const Contacts = ({lan}) => {

  const handellinkeid = () => {
    window.open('https://www.linkedin.com/in/gustavo-alain-portillo-hernández-b873b35a', '_blank');
  }

  const handelgithub = () => {
    window.open('https://github.com/gustagod', '_blank');
  }

  const handelwhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=5216442110065', '_blank');
  }
  const handelcv = () => {
    window.open('../../cv_esp.pdf/', '_blank');
  }

  return (
    <div className='contacts__div'>
      <ul className='contacts__ul1'>
        <li className='contacts_ul1li'>
        <ul className='contacts_ul1ul2'>
        <li onClick={handellinkeid} className='contacts__ul2_li'><img src="../../Contacts/linkedin.svg" alt="" /><span>Linkedin</span></li>
        <li onClick={handelgithub} className='contacts__ul2_li'><img src="../../Contacts/github.svg" alt="" /><span>Github</span></li>
        <li onClick={handelwhatsapp} className='contacts__ul2_li'><img src="../../Contacts/whatsapp.svg" alt="" /><span>Whatsapp</span></li>
        <li onClick={handelcv} className='contacts__ul2_li'><img src="../../Contacts/cv.svg" alt="" /><span>CV</span></li>
      </ul>
        </li>
        <li className='contacts_ul1li'>
          {
            lan === 'spanish' ?(
              <ul className='contacts_ul1ul3'>
              <li>Gustavo Portillo</li>
              <li>Telefono: (+52)6442-11-00-65</li>
              <li>Email: gustavo.alain@gmail.com</li>
            </ul>
            ):
            (
              <ul className='contacts_ul1ul3'>
              <li>Gustavo Portillo</li>
              <li>Phone: (+52)6442-11-00-65</li>
              <li>Email: gustavo.alain@gmail.com</li>
            </ul>
            )
          }

        </li>
      </ul>

    </div>
  )
}

export default Contacts