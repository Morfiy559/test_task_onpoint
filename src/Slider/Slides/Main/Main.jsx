import React from "react";
import './Main.css';
import pink_btn from '../../../assets/images/pink-btn.png';
let Main = ({toNext}) => {
    return (
        <div className='Main'>
            <div className='hello_text'>Привет,</div>
            <div className='title'>
                Это <span>не</span> <br/>
                коммерческое <br/>задание
                <img onClick={toNext} src={pink_btn} className='pink_btn'/>
            </div>
        </div>
    )
}
export default Main;