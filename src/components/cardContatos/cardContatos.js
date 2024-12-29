import React from "react";
import "./cardContatos.css";

function CardContatos({ nome, numero, instagram, email }) {

    return (
        <div id="contato_card">
            <h2 id="titulo_card">{nome}</h2>
            <p className="item_contato">
                whatsapp:
                <a href={`https://wa.me/5561${numero}`} target="_blank" rel="noreferrer">
                    (61) {numero}
                </a>
            </p>
            <p className="item_contato">
                instagram:
                <a href={`https://www.instagram.com/${instagram}/`} target="_blank" rel="noreferrer">
                    @{instagram}
                </a>
            </p>
            <p className="item_contato">
                email:
                <a href={`mailto:${email}`}>
                    {email}
                </a>
            </p>
        </div>
    )
};

export default CardContatos;