import './HeroSection.css';
import Button from "../Button";
import React from "react";
import Background from "../Background";
import soundWave from '../../assets/music_rythm.svg';

const HeroSection = () => {
    return (
        <div className="main-frame">
            <Background />
            <div className="full-container">
                <div className="upper-container">
                    <img src={soundWave} alt="Sound Wave" className="sound-wave"/>
                    <h1>Quem canta seus males espanta!</h1>
                    <h3>Cantar nunca foi tão fácil!</h3>
                </div>
                <span className="bottom-container">
                    <Button label="Ver planos" type="secondary"/>
                    <Button label="Baixar agora" type="primary"/>
                </span>
            </div>
        </div>
    );
};

export default HeroSection;