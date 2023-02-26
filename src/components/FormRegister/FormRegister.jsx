import React from 'react'
import './formregister.css'
import Form from '../Form/Form'

export default function FormRegister() {
  return (
    <div className='conteiner'>
			  <div className='conteiner-form'>
			    <Form/>
			  </div>	
			  <div className='conteiner-img'>
			    <img className="img-form" src="./image/formImg.png" alt="Img-Pagina-Form" />
			  </div>
		  </div>
  )
}
