import React, {createRef, useEffect, useState} from "react";
import './ScrollPage.css';
import pink_sperm_scroll_1 from '../../../assets/images/pink_sperm_scroll_1.png';
import pink_sperm_scroll_2 from '../../../assets/images/pink_sperm_scroll_2.png';
import pink_sperm_scroll_3 from '../../../assets/images/pink_sperm_scroll_3.png';
import pink_sperm_scroll_4 from '../../../assets/images/pink_sperm_scroll_4.png';
import pink_sperm_scroll_5 from '../../../assets/images/pink_sperm_scroll_5.png';

let ScrollPage = ({activeSlideIndex}) => {
    const Text = createRef();

    const [isId, setIsId] = useState(true)

    const [sliderVal, setSliderVal] = useState(0);

    let onChange = (e) => {
        setSliderVal(e.target.value);
        Text.current.scrollTop = sliderVal * 4;
    }
    let onScroll = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        if(activeSlideIndex===1){
            setIsId(true)}
        else {
            setTimeout(()=>{setIsId(false)},500)
        }
    },[activeSlideIndex]);

    return (
        <div className='ScrollPage'>
            <div className='message_text'>Текст <br/> сообщения</div>
            <div className='message_block'>
                <input
                    className='range'
                    type="range"
                    min='0'
                    max='100'
                    value={sliderVal}
                    onChange={onChange}
                />
                <div ref={Text}
                     onScroll={onScroll}
                     className='message_block_text'
                >Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, velit esse
                    cillum dolore eu fugiat nulla pariatur?

                    Ut enim ad minima veniam, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel
                    illum, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim
                    ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo
                    minus id, quod maxime placeat, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Excepteur sint occaecat cupidatat non proident, consectetur adipiscing elit, ut aut reiciendis
                    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat? Temporibus
                    autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, quia voluptas sit,
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi
                    nesciunt, neque porro quisquam est, qui dolorem eum fugiat, quo voluptas nulla pariatur!

                    At vero eos et accusamus et iusto odio dignissimos ducimus, quia voluptas sit, aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque
                    porro quisquam est, quae ab illo inventore veritatis et...
                </div>
            </div>
            <img id={isId? 'pink_sperm_scroll_1':''} src={pink_sperm_scroll_1} alt="pink_sperm_scroll_1"/>
            <img id={isId? 'pink_sperm_scroll_2':''} src={pink_sperm_scroll_2} alt="pink_sperm_scroll_2"/>
            <img id={isId? 'pink_sperm_scroll_3':''} src={pink_sperm_scroll_3} alt="pink_sperm_scroll_3"/>
            <img id={isId? 'pink_sperm_scroll_4':''} src={pink_sperm_scroll_4} alt="pink_sperm_scroll_4"/>
            <img id={isId? 'pink_sperm_scroll_5':''} src={pink_sperm_scroll_5} alt="pink_sperm_scroll_5"/>
        </div>
    )
}
export default ScrollPage;