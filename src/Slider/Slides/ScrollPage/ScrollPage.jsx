import React, {createRef, useState} from "react";
import './ScrollPage.css';

let ScrollPage = () => {
    const Text = createRef();
    const [sliderVal, setSliderVal] = useState(0);

    let onChange = (e) => {
        setSliderVal(e.target.value);
        Text.current.scrollTop = sliderVal*4;
    }
    let onScroll = (e) =>{
        e.preventDefault();
    }
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
        </div>
    )
}
export default ScrollPage;