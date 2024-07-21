import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGit, faGithub, faLinkedinIn, faSquareInstagram, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import './Footer.css'

const Footer = () => {
    return (
        <div >
            <footer className="footer">
                <div className="container-footer">
                    <div className="footer-row">
                        <div className="footer-links">
                            <div className="social-link flex flex-wrap flex-col justify-center">
                                <h1 className=' pb-4 flex justify-center font-semibold text-white'>SIGUEME</h1>
                                <div className='flex py-2 justify-center'>

                                    <Link href="https://github.com/RenzoFantu"><FontAwesomeIcon className="text-white hover:text-secondary" icon={faGithub} /></Link>
                                    <Link href="https://www.linkedin.com/in/renzo-fantuzzi-silva-0ab81557/"><FontAwesomeIcon className="text-white hover:text-secondary" icon={faLinkedinIn} /></Link>
                                </div>

                            </div>
                        </div>

                        <div className="footer-links">
                            <h4>About</h4>
                            <ul>
                                <li><Link href='/'>Ir al inicio</Link></li>
                                <li><Link href='/about'>Sobre mí</Link></li>
                                <li><Link href='/proyects'>Proyectos</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Contáctame</h4>
                            <ul>
                                <li><Link href='/contacto'>Dejame unmensaje</Link></li>
                                <li><Link href='/contacto'>Mail: rfantuzzi@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className="texto-derechos py-2">© 2024. Todos los derechos reservados. Esta es una página de Renzo Fantuzzi.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

