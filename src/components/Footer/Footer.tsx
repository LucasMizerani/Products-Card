import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaCopyright } from 'react-icons/fa'

const FooterPage: React.FC = () => {
    return (
        <footer className="footer_page">
            <ul>
                <li className="facebook"><FaFacebook /></li>
                <li className="instagram"><FaInstagram /></li>
                <li className="linkedin"><FaLinkedin /></li><br />
                <li className="copy" id="copy1"><FaCopyright />    Copyright 2023 - Lucas Mizerani</li>
            </ul>
        </footer>
    );
}

export default FooterPage;