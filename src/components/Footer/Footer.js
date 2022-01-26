import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
    <div className="fooTitulo">
      <a className="fooTitulo" href="/"><p>OSIRIS SHOES</p></a>
    </div>
      <div className="redes">
          <a className="footer__instagram--hover" href="http://www.instagram.com/tobiasprieto_" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram "></i></a>
          <a className="footer__whatsapp--hover" href="https://wa.link/wz36a2" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"> </i></a>
          <a className="footer__correo--hover" href="mailto:osirisshoes@gmail.com"> <i className="far fa-envelope"> </i></a>
      </div>
      
      
      <div className="copyright">
        <p>Copyright &copy; 2022 All Rights Reserved</p>
      </div>
      <div className="desarrollado">
        <p>Desarrollado por Tobias Prieto</p>
      </div>
     
  </footer>
        </div>
    )
}

export default Footer