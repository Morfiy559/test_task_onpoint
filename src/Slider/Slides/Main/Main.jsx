import React from "react";
import './Main.css';
import pink_btn from '../../../assets/images/pink-btn.png';
import bact from '../../../assets/images/bact.png';
import bact_ball from '../../../assets/images/bact_ball.png';
import pink_sperm_1 from '../../../assets/images/pink_sperm_1.png';
import pink_sperm from '../../../assets/images/pink_sperm.png';
import bact_ball_1 from '../../../assets/images/bact_ball_1.png';
import bakti_1 from '../../../assets/images/bakti_1.png';
import bact_ball_2 from '../../../assets/images/bact_ball_2.png';
import blur_ball from '../../../assets/images/blur_ball.png';
import blur_ball_2 from '../../../assets/images/blur_ball_2.png';

let Main = ({toNext}) => {
    return (
        <div className='Main'>
            <div className='hello_text'>Привет,</div>
            <div className='title'>
                Это <span>не</span> <br/>
                коммерческое <br/>задание
                <img onClick={toNext} src={pink_btn} className='pink_btn' alt='next'/>
            </div>
            <img id='bact' src={bact} alt="bacteria"/>
            <img id='bact_ball' src={bact_ball} alt="bacteria_ball"/>
            <img id='pink_sperm_1' src={pink_sperm_1} alt="pink_sperm_1"/>
            <img id='bact_ball_1' src={bact_ball_1} alt="bact_ball_1"/>
            <img id='bakti_1' src={bakti_1} alt="bakti_1"/>
            <img id='bact_ball_2' src={bact_ball_2} alt="bact_ball_2"/>
            <img id='pink_sperm' src={pink_sperm} alt="pink_sperm"/>
            <img id='blur_ball' src={blur_ball} alt="blur_ball"/>
            <img id='blur_ball_2' src={blur_ball_2} alt="blur_ball_2"/>
        </div>
    )
}
export default Main;