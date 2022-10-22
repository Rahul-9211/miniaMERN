import React from 'react';
// import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  // const intl = useIntl();

  function signOut() {
  }
  return (
    <ProSidebar
      // image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      className="aside"
    >
      {/* <SidebarHeader> */}
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          bootstrap
        </div>
      {/* </SidebarHeader>   */}

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">not working</span>}
          >
            dashboard  &nbsp;
          </MenuItem>
          <MenuItem icon={<FaGem />}> main menu item</MenuItem>
        </Menu>
        {/* <Menu iconShape="circle">
          <Link to="/chart">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red">this is me </span>}
            >
              Chart
            </MenuItem>
          </Link>
          <Link to="/apex">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red">this is me </span>}
            >
              ApexChart
            </MenuItem>
          </Link>
          <Link to="/dashboard">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red">this is me </span>}
            >
              Dashboard
            </MenuItem>
          </Link>
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="title"
            icon={<FaRegLaughWink />}
          >
            <MenuItem>main menu item 1</MenuItem>
            <MenuItem>main menu item 2</MenuItem>
            <MenuItem>main menu item 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title="sub menu title"
            icon={<FaHeart />}
          >
            <MenuItem>main menu subitem 1</MenuItem>
            <MenuItem>main menu subitem 2</MenuItem>
            <MenuItem>main menu subitem 3</MenuItem>
          </SubMenu>
          <SubMenu title="multilevel submenu" icon={<FaList />}>
            <MenuItem>main menu subitem 1 </MenuItem>
            <MenuItem>main menu subitem 2 </MenuItem>
            <SubMenu title={`$main menu subitem 3`}>
              <MenuItem>main menu subitem 3.1 </MenuItem>
              <MenuItem>main menu subitem 3.2 </MenuItem>
              <SubMenu title={`$main menu subitem 3.3`}>
                <MenuItem>main menu subitem 3.3.1 </MenuItem>
                <MenuItem>main menu subitem 3.3.2 </MenuItem>
                <MenuItem>main menu subitem 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu> */}
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        {/* <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            view score
            </span>
          </a>
        </div> */}
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          {/* <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            view score
            </span>
          </a> */}
          <Button onClick={() => { console.log("this is em") }} className="bg-transparent text-white">Sign Out</Button>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
