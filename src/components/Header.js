import React from 'react';
import "./Header.css";
import backphoto from "../assets/career-1.jpg";

const Header = () => {
  return (
    <>
      <div className='header' style={{height:200,background:`url(${backphoto})`}}>
        {/* <img alt="background" src={backphoto} className='header-img' /> */}
        <h1 className='header-tag'>Header</h1>
      </div>
    </>
  )
}

export default Header