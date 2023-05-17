import { useState,useEffect } from "react"
import styled from "styled-components"
import { FaChevronUp } from 'react-icons/fa'

function ScrollBtn() {

const [isShow, setIsShow] = useState(false);

const showBtn = () => {
    if(window.scrollY > 20) {
        setIsShow(true)
    } else {
        setIsShow(false)
    }
}

useEffect(() => {
    showBtn();
    window.addEventListener('scroll', showBtn);
}, []);

const toTop = () => {
    document.documentElement.scrollTop = 0;
}

  return (
    <ScrollTopBtn className={isShow ? "show" : undefined} onClick={toTop}> <FaChevronUp /> </ScrollTopBtn>
  )
}

const ScrollTopBtn = styled.div`
    position: fixed;
    height: 40px;
    width: 40px; 
    background: var(--btnColor);
    right: 30px;
    bottom: 10px;
    text-align: center;
    line-height: 45px;
    color: var(--white);
    z-index: 1;
    font-size: 30px;
    border-radius: 50px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all .3s ease;
    z-index: 1000;

    &:active{
    transform: scale(1.09);
}

&.show {
    opacity: 1;
    pointer-events: auto;
    bottom: 30px;
}

@media(max-width: 500px) {
    height: 35px;
    width: 35px; 
    right: 20px;
    bottom: 10px;
    line-height: 40px;
    font-size: 25px;
}



`

export default ScrollBtn