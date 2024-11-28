import React from "react";
import "./footer.css";
import Logo from "../../assets/LoonetaLogo.png";

function Footer() {

    return (
        <footer>
            <img style={{objectfit: "contain"}} id="logo" src={Logo} alt="A imagem não pode ser carregada"/>
            <span className="textoFinal">Todos os direitos reservados ©</span>
            <span className="textoFinal">Desenvolvido por: Paulo Igor S Torres</span>
        </footer>
    )
};

export default Footer;