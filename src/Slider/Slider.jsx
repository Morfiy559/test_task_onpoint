import React, {useState} from "react";
import './Slider.css';
import Main from "./Slides/Main/Main";
import ScrollPage from "./Slides/ScrollPage/ScrollPage";
import PopUpPage from "./Slides/PopUpPage/PopUpPage";
import home from '../assets/images/Home.png';

let Slider = () => {
    let toNext = () => {
        setActiveSlideIndex(1);
    }
    const Slides = [
        <Main toNext={toNext} key='1'/>,
        <ScrollPage key='2'/>,
        <PopUpPage key='3'/>,
    ]
    // Индекс текущего слайда
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [fast, setFast] = useState('');
    let startX, distX, dir;
    let startTime;
    //Проверка
    //начало swipe
    let start = (event) => {
        //определяем начальные координаты мышки
        startX = event.changedTouches[0].pageX;
        startTime = new Date().getTime();
    }
    //конец swipe
    let end = (event) => {
        let endTime = new Date().getTime();
        let time = endTime - startTime;
        if (time < 500) {
            //определяем пройденную дистанцию
            distX = event.changedTouches[0].pageX - startX;
            //определяем направление свайпа
            dir = (distX < 0) ? "left" : "right";
            switch (dir) {
                case 'left':
                    if (nextSlideIndex == null) return;
                    // Меняем состояние
                    setActiveSlideIndex((current) => {
                        // Вычисляем индекс следующего слайда, который должен вывестись
                        if (current === Slides.length - 1) {
                            return 0
                        } else {
                            return current + 1
                        }
                    })
                    break;
                case 'right':
                    if (prevSlideIndex == null) return;
                    // Меняем состояние
                    setActiveSlideIndex((current) => {
                        // Вычисляем индекс следующего слайда, который должен вывестись
                        if (current === 0) {
                            return Slides.length - 1
                        } else {
                            return current - 1
                        }
                    })
                    break;
                default:
                    break;
            }
        }
    }
    let toHome = () => {
        if (activeSlideIndex > 1) {
            setFast(' fast')
            let time = (activeSlideIndex - 1) * 250;
            for (let i = activeSlideIndex - 1; i >= 0; i--) {
                setTimeout(() => {
                    setActiveSlideIndex(i);
                }, (Slides.length - 2 - i) * 250)
            }
            setTimeout(() => {
                setFast('')
            }, time)
        } else {
            setActiveSlideIndex(0);
        }
    }
    // Вычисляем индекс предыдущего слайда
    const prevSlideIndex = activeSlideIndex === 0 ? null : activeSlideIndex - 1;
    // Вычисляем индекс следующего слайда
    const nextSlideIndex = activeSlideIndex === Slides.length - 1 ? null : activeSlideIndex + 1

    return (
        <>
            <div className='home' onClick={toHome}><img src={home} alt="home"/></div>
            <div className={"slider"}>
                <div className={"slider-img slider-img-prev" + fast}
                     key={prevSlideIndex}>
                    {Slides[prevSlideIndex]}
                </div>
                <div onTouchStart={start} onTouchEnd={end} className={"slider-img" + fast}
                     key={activeSlideIndex}>
                    {Slides[activeSlideIndex]}
                </div>
                <div className={"slider-img slider-img-next" + fast}
                     key={nextSlideIndex}>
                    {Slides[nextSlideIndex]}
                </div>
            </div>
        </>
    )
}
export default Slider;