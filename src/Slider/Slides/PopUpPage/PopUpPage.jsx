import React, {useState} from "react";
// import image from '../../../assets/images/img.png';
import './PopUpPage.scss';
import icon2 from '../../../assets/images/icon2.png';
import icon1 from '../../../assets/images/icon1.png';
import btn from '../../../assets/images/btn.png';
import btn_prev from '../../../assets/images/btn_prev.png';
import btn_next from '../../../assets/images/btn_next.png';
import btn_close from '../../../assets/images/btn_close.png';
import bubble_1 from '../../../assets/images/bubble_1.png';
import bubble_2 from '../../../assets/images/bubble_2.png';
import bubble_3 from '../../../assets/images/bubble_3.png';
import bubble_4 from '../../../assets/images/bubble_4.png';
import bubble_5 from '../../../assets/images/bubble_5.png';
import bubble_6 from '../../../assets/images/bubble_6.png';
import bubble_7 from '../../../assets/images/bubble_7.png';
import bubble_8 from '../../../assets/images/bubble_8.png';
import bottle from '../../../assets/images/bottle.png';

let PopUpPage = () => {


    const [isOpen, setIsOpen] = useState(false);
    let open = () => {
        setIsOpen(true)
    }
    let close = () => {
        setIsOpen(false)
    }
    return (
        <div className='PopUpPage'>
            {/*<img className='image' src={image} alt="falcon"/>*/}
            <div className='important_block'>
                <div className='important_message'>
                    ключевое сообщение<br/>
                    <span className='big'>brend<span className='black'>xy</span></span>
                </div>
                <div className='blocks'>
                    <div className='plate'>
                        Разнообразный и богатый опыт говорит нам, что существующая теория представляет собой интересный
                        экспери
                        <img className='icon2' src={icon2} alt='plate'/>
                    </div>
                    <div className='col'>
                        <div className='calendar'>
                            Разнообразный и богатый опыт
                            <img className='icon1' src={icon1} alt='calendar'/>
                        </div>
                        <img onClick={open} src={btn} className='btn' alt='in_detail'/>
                    </div>
                </div>
            </div>
            {isOpen && <PopUpWindow close={close}/>}
            <img id='bubble_1' src={bubble_1} alt="bubble_1"/>
            <img id='bubble_2' src={bubble_2} alt="bubble_2"/>
            <img id='bubble_3' src={bubble_3} alt="bubble_3"/>
            <img id='bubble_4' src={bubble_4} alt="bubble_4"/>
            <img id='bubble_5' src={bubble_5} alt="bubble_5"/>
            <img id='bubble_6' src={bubble_6} alt="bubble_6"/>
            <img id='bubble_7' src={bubble_7} alt="bubble_7"/>
            <img id='bubble_8' src={bubble_8} alt="bubble_8"/>
            <img id='bottle' src={bottle} alt="bottle"/>
        </div>
    )
}
let PopUpWindow = ({close}) => {
    const [checked, setChecked] = useState(1);
    const [fadeTransition, setFadeTransition] = useState(null);
    const [fadeState, setFadeState] = useState('fade-in');
    let check = (num) => {
        if (num) {
            fadeInOut(num)
        } else {
            if (checked === 1) {
                fadeInOut(2)
            } else {
                fadeInOut(1)
            }
        }
    }

    let fadeInOut = (num) => {
        const timeout = setTimeout(() => {
                setFadeTransition( null);
                setFadeState('fade-in');
            setChecked(num)
        }, 400);

        setFadeTransition(null);
        setFadeState('fade-out');
        setFadeTransition(timeout);
    }


    const texts = [
        <div className={checked === 1 ? 'anim' : ''}>
            <div><span className='blue'>01</span> <br/>
                Как принято считать, ключевые особенности структуры проекта лишь добавляют
            </div>
            <div><span className='blue'>02</span> <br/>
                Как принято считать, ключевые особенности структуры
            </div>
            <div><span className='blue'>03</span> <br/>
                Как принято считать, ключевые особенности
            </div>
        </div>,
        <div className={checked === 2 ? 'anim' : ''}>
            <div><span className='blue'>01</span> <br/>
                Как принято считать, ключевые особенности структуры
            </div>
            <div><span className='blue'>02</span> <br/>
                Как принято считать, ключевые особенности структуры проекта лишь добавляют
            </div>
            <div><span className='blue'>03</span> <br/>
                Как принято считать, ключевые особенности
            </div>
        </div>
    ]

    return (
        <div className='PopUpWindow'>
            <div className='block_wrapper'>
                <div className='block'>
                    <div className='important_message'>
                        Преимущества<br/>
                        <span className='big'>brend<span className='black'>xy</span></span>
                    </div>
                    <div className={`slider_text ${fadeState}`}>
                        {(checked === 1 && texts[0]) || texts[1]}
                    </div>
                    <div className={'controls'}>
                        <img onClick={() => {
                            check()
                        }} className='arrow' src={btn_prev} alt="arrow"/>
                        <div onClick={() => {
                            check(1)
                        }} className={checked === 1 ? 'circle checked' : 'circle'}/>
                        <div onClick={() => {
                            check(2)
                        }} className={checked === 2 ? 'circle checked' : 'circle'}/>
                        <img onClick={() => {
                            check()
                        }} className='arrow' src={btn_next} alt="arrow"/>
                    </div>
                    <img onClick={close} className='btn_close' src={btn_close} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default PopUpPage;