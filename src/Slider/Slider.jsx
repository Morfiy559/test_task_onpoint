import React, {useState} from "react";
import './Slider.css';
import Main from "./Slides/Main";
import ScrollPage from "./Slides/ScrollPage";
import PopUpPage from "./Slides/PopUpPage";

let Slider = () => {
    const Slides = [
        <Main key='1'/>,
        <ScrollPage key='2'/>,
        <PopUpPage key='3'/>,
    ]
    // Индекс текущего слайда
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    let startX, distX, dir;
    //Проверка
    //начало swipe
    let start = (event) => {
        //определяем начальные координаты мышки
        startX = event.changedTouches[0].pageX;
    }
    //конец swipe
    let end = (event) => {
        //определяем пройденную дистанцию
        distX = event.changedTouches[0].pageX - startX;
        //определяем направление свайпа
        dir = (distX < 0) ? "left" : "right";
        switch (dir) {
            case 'left':
                if(nextSlideIndex == null)return;
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
                if(prevSlideIndex == null)return;
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

    // Вычисляем индекс предыдущего слайда
    const prevSlideIndex = activeSlideIndex === 0 ? null : activeSlideIndex - 1;
    // Вычисляем индекс следующего слайда
    const nextSlideIndex = activeSlideIndex === Slides.length - 1 ? null : activeSlideIndex + 1

    return (
        <div>
            <div className="slider">
                <div className="slider-img slider-img-prev"
                     key={prevSlideIndex}>
                    {Slides[prevSlideIndex]}
                </div>
                <div onTouchStart={start} onTouchEnd={end} className="slider-img"
                     key={activeSlideIndex}>
                    {Slides[activeSlideIndex]}
                </div>
                <div className="slider-img slider-img-next"
                     key={nextSlideIndex}>
                    {Slides[nextSlideIndex]}
                </div>
            </div>
        </div>
    )
}
export default Slider;