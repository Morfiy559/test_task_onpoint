import React from "react";
import image from '../../../assets/images/img.png';
import './PopUpPage.css';
import icon2 from '../../../assets/images/icon2.png';
let PopUpPage = () => {
    return (
        <div className='PopUpPage'>
            <img className='image' src={image} alt="image"/>
            <div className='important_block'>
                <div className='important_message'>
                    ключевое сообщение<br/>
                    <span className='big'>brend<span className='black'>xy</span></span>
                </div>
                <div className='blocks'>
                    <div className='plate'>
                        Разнообразный и богатый опыт говорит нам, что существующая теория представляет
                        <img className='icon2' src={icon2}/>
                    </div>
                    <div className='calendar'>
                        Разнообразный и богатый опыт
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopUpPage;