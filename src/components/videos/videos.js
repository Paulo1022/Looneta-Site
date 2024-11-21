import React from "react";
import "./videos.css";
import Video1 from "../../assets/MrHoppyVideo.mp4";
import Video2 from "../../assets/PorksAguasVideo.mp4";
import Video3 from "../../assets/Code61BarVideo.mp4";
import Logo1 from "../../assets/MrHoppyLogo.png";
import Logo2 from "../../assets/PorksLogo.png";
import Logo3 from "../../assets/Code61Logo.png";

function Videos() {

    return (
        <div id="video_component">
            <h1 id="video_title">Veja as principais localidades para ver o Looneta!</h1>
            <div id="videos_container">
                <div className="video_cards">
                    <video controls className="video">
                        <source src={Video1}/>
                    </video>
                    <a href="https://www.instagram.com/p/CsmZaUPPum3/" target="blank">
                        <img src={Logo1} className="videos_logo" alt=""/>                        
                    </a>
                    <h3 className="logo_title logo_name">Mr Hoppy</h3>
                </div>
                <div className="video_cards">
                    <video controls className="video">
                        <source src={Video2}/>
                    </video>
                    <a href="https://www.instagram.com/p/CrbukQuAG1z/" target="blank">
                        <img src={Logo2} className="videos_logo" alt=""/>                        
                    </a>
                    <h3 className="logo_title logo_name">Porks</h3>
                </div>
                <div className="video_cards">
                    <video controls className="video">
                        <source src={Video3}/>
                    </video>
                    <a href="https://www.instagram.com/p/CrMRw_Bg9Ra/" target="blank">
                        <img src={Logo3} className="videos_logo" alt=""/>
                    </a>
                    <h3 className="logo_title logo_name">Code61 Bar</h3>
                </div>
            </div>
        </div>
    )
}

export default Videos;