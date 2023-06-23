import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const FooterPage: React.FC = () => {
    return (
        <footer className="footer_page">
            <ul>
                <li className="facebook"><FaFacebook /></li>
                <li className="instagram"><FaInstagram /></li>
                <li className="linkedin"><FaLinkedin /></li>
            </ul>
        </footer>
    );
}

export default FooterPage;