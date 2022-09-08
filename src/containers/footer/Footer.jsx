import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div><body>
    <footer>
        <div className="f-item-con">
            <div className="app-info">
                <span className='app-name'>
                    <span className='app-initial'>D</span>anma
                </span>
                <p>Los mejores mates <strong>en Argentina</strong> y <strong>todo el mundo</strong> ¡WOW!</p>
            </div>
            <div className="useful-links">
                <div className="footer-title">Links Útiles</div>
                <ul>
                    <li>Inicio</li>
                    <li>Novedades</li>
                    <li>Nosotros</li>
                    <li>¿Cómo comprar?</li>
                    <li>Nuestra shop en Mercadolibre</li>
                    <li>Términos y condiciones</li>
                </ul>
            </div>
            <div className="help-sec">
                <div className="footer-title">Ayuda</div>
                <ul>
                    <li>Recibir ayuda</li>
                    <li>Comentarios</li>
                    <li>Reportar un error</li>
                </ul>
            </div>
            <div className="g-i-t">
                <div className="footer-title">Ponéte en contacto!</div>
                <form action="/" method="post" className="space-y-2">
                    <input type="text" name="g-name" className="g-inp" id="g-name" placeholder='Nombre' />
                    <input type="email" name="g-email" className="g-inp" id="g-email" placeholder='Email' />
                    <textarea type="text" name="g-msg" className="g-inp h-40 resize-none" id="g-msg"
                        placeholder='Mensaje...'></textarea>
                    <button type="submit" className='f-btn'>Enviar</button>
                </form>
            </div>
        </div>
        <div className='cr-con'>Copyright &copy; 2022 | Made by Florencia Sánchez</div>
    </footer>

</body></div>
  )
}

export default Footer