import React from "react";
import "./musicos.css";

function Musicos({ name, description, image }) {

    return(
        <>
            <div id="artist_container">
                <div id="texts">
                    <h1 id="title">{name}</h1>
                    <span id="description">{description}</span>
                </div>
                <img id="foto" src={image} alt=""/>
            </div>
        </>
    )
};

export default Musicos;