import '../css/MainBanner.css';
import Button from "./Button";
import React from "react";
import Background from "./Background";
import soundWave from '../assets/music_rythm.svg';

const MainBanner = () => {
    return (
        <div className="main-banner">
            {/*<Background />*/}
            <div className="text-container">
                <img src={soundWave} alt="Sound Wave" className="sound-wave"/>
                <h1>Quem canta seus males espanta!</h1>
                <h3>Cantar nunca foi tão fácil!</h3>
                <Button className="download-button" label="Baixar agora" type="primary"/>
            </div>
        </div>
    );
};

export default MainBanner;