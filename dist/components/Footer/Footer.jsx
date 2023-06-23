"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./Footer.css");
const fa_1 = require("react-icons/fa");
const FooterPage = () => {
    return (<footer className="footer_page">
            <ul>
                <li className="facebook"><fa_1.FaFacebook /></li>
                <li className="instagram"><fa_1.FaInstagram /></li>
                <li className="linkedin"><fa_1.FaLinkedin /></li>
            </ul>
        </footer>);
};
exports.default = FooterPage;
