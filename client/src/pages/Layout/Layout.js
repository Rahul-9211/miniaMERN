import React, { useState } from 'react';
// import { Col, Row } from 'react-bootstrap';
import TextLinkExample from '../../components/Navbar/Navbar';
import Aside from '../../components/Sidebar/Aside';
import { FaHeart } from 'react-icons/fa';
// import Main from './Main';

function Layout({ child,
  setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>

      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <main>
        {/* Navbar  */}
        <TextLinkExample
          image={image}
          toggled={toggled}
          collapsed={collapsed}
          rtl={rtl}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
          handleRtlChange={handleRtlChange}
          handleImageChange={handleImageChange}
        />

        {/* main component */}
        <div className='m-4'>

          {child}
        </div>

        {/* footer  */}
        <footer>
          <small>
            © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://rrawatportfolio.netlify.app/">
              Rahul Rawat
            </a>
          </small>
          <br />
          <div className="social-bagdes">
            <a href="https://github.com/Rahul-9211/Rahul-9211" target="_blank" rel="noopener noreferrer">
              <img
                alt="GitHub followers"
                src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social"
              />
            </a>
            {/* <a href="https://twitter.com/azouaoui_med" target="_blank" rel="noopener noreferrer">
              <img
                alt="Twitter Follow"
                src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social"
              />
            </a> */}
          </div>
        </footer>

      </main>

      {/* // child component or page  */}
      {/* <div className='main_content'>{child}</div>
        <div className='main_content'>{child}</div>
        <div className='main_content'>{child}</div>
        <div className='main_content'>{child}</div>
        <div className='main_content'>{child}</div>
        <div className='main_content'>{child}</div>
        <div className='main_content'>{child}</div>
        <div className='main_content'>{child}</div> */}
      {/* <Main
        image={image}
        toggled={toggled}
        collapsed={collapsed}
        rtl={rtl}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange}
        handleImageChange={handleImageChange}
      /> */}
    </div>

    //  </div>
  );
}

export default Layout;
