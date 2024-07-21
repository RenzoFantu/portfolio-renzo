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

                                    <Link href="https://github.com/RenzoFantu"><FontAwesomeIcon className="text-white" icon={faGithub} /></Link>
                                    <Link href="#"><FontAwesomeIcon className="text-white" icon={faLinkedinIn} /></Link>
                                </div>

                            </div>
                        </div>

                        <div className="footer-links">
                            <h4>NOSOTROS</h4>
                            <ul>
                                <li><Link href='#'>Nosotros</Link></li>
                                <li><Link href='#'>Nuestros Productos</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>ÚNETE AL CLUB</h4>
                            <ul>
                                <li><Link href='#'></Link></li>
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

