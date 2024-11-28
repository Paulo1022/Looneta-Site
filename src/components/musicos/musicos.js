import React from "react";
import "./musicos.css";

function Musicos({ name, description, image, direction }) {

    return(
        <>
            <div id="artist_container" style={{flexDirection: {direction}}}>
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