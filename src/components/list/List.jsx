import React, { useRef, useState } from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import Listitem from '../listitem/Listitem'
import './list.scss'


const List = () => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const handleClick = (dir)=>{
    const distance = listRef.current.getBoundingClientRect();
    let screenWidth = window.screen.availWidth;
    console.log(screenWidth)
    let distFromLeft = distance.x - 50;
    if(dir === 'left' && distFromLeft < 0){
      distFromLeft = Math.min(distFromLeft + 460, 0);
      listRef.current.style.transform = `translateX(${distFromLeft}px)`;
    }else if(dir === 'right'){
      distFromLeft = Math.max(distFromLeft - 460, screenWidth - distance.width - 95);
      listRef.current.style.transform = `translateX(${distFromLeft}px)`;
    }
  }
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick('left')} />
                <div className="container" ref={listRef}>
                    <Listitem index={0}/>
                    <Listitem index={1}/>
                    <Listitem index={2}/>
                    <Listitem index={3}/>
                    <Listitem index={4}/>
                    <Listitem index={5}/>
                    <Listitem index={6}/>
                    <Listitem index={7}/>
                    <Listitem index={8}/>
                    <Listitem index={9}/>
                    <Listitem index={10}/>
                    <Listitem index={11}/>
                    <Listitem index={12}/>
                    <Listitem index={13}/>
                    <Listitem index={14}/>
                    <Listitem index={15}/>
                </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick('right')}/>
        </div>
    </div>
  )
}

export default List
