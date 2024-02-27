import React from "react";
import "./banner.css";
import FotoBanner from "../../assets/LoonetaBanner.png";

function Banner() {

    return (
        <div className="banner_container">
            <img className="foto_banner" src={FotoBanner} alt=""/>
            <div id="text_container">
                <h1 id="title_banner">DUO LOONETA</h1>
                <p id="text_banner">Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá.
                Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss, é um leite divinis, qui tem
                lupuliz, matis, aguis e fermentis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
                Nam vulputate dapibus.</p>
            </div>
        </div>
    )
}

export default Banner;