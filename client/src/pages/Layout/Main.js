import React from 'react';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from '../../assets/logo.svg';
import TextLinkExample from '../../components/Navbar/Navbar';

const Main = ({
  collapsed,
  child,
  rtl,
  image,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  return (
    <>


      <main>
        {/* <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div> */} 
        {/* {child} */}


      </main>
    </>

  );
};

export default Main;
