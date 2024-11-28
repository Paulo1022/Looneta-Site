import React from "react";
import YouTube from 'react-youtube';
import Imagem from "../../assets/PodcastFoto.png";
import "./podcast.css";

function Podcast() {

    return (
        <div id="podcast_container">
            <div id="video_container">
                <h2 id="podcast_title">Veja a intevista do Looneta no Podcast "Só de Passagem" que anima a quadra 08 de Sobradinho!</h2>
                <YouTube videoId="PO-v8RgfoKo" className="podcast_video" />
            </div>
            <img className="podcast_image" src={Imagem} alt=""/>
        </div>
    )
}

export default Podcast;