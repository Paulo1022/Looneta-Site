import React from "react";
import { PiInstagramLogoBold, PiTiktokLogoBold, PiWhatsappLogo } from "react-icons/pi";
import "./header.css";
import Logo from "../../assets/LoonetaLogo.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <header id="header_container">
            <img className="logo_header" src={Logo} onClick={() => navigate('/')} alt=""/>
            <nav>
                <ul>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <li className="header_link">Home</li>
                    </Link>
                    <Link to='/integrantes' style={{ textDecoration: 'none' }}>
                        <li className="header_link">Integrantes</li>
                    </Link>
                    <Link to='/contato' style={{ textDecoration: 'none' }}>
                        <li className="header_link">Contato</li>
                    </Link>
                </ul>
            </nav>
            <div className="social_media">
                <a href="https://www.instagram.com/loonetaoficial/" target="blank">
                    <PiInstagramLogoBold className="social_media_logo" id="instagram_logo"/>
                </a>
                <a href="https://www.tiktok.com/@loonetaoficial" target="blank">
                    <PiTiktokLogoBold className="social_media_logo" id="tiktok_logo"/>
                </a>
                <a href="https://wa.me/5561994308631" target="blank">
                    <PiWhatsappLogo className="social_media_logo" id="phone_logo"/>
                </a>
            </div>
        </header>
    )
}

export default Header;