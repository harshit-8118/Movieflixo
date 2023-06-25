import React, { useRef, useState } from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import Listitem from '../listitem/Listitem'
import './list.scss'

const List = () => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const handleClick = (dir)=>{
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if(dir === 'left' && slideNumber > 0){
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
    }else if(dir == 'right' && slideNumber < 5){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
    }
  }
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick('left')} />
                <div className="container" ref={listRef}>
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                    <Listitem />
                </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick('right')}/>
        </div>
    </div>
  )
}

export default List
