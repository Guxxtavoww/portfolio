import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import { NavbarContainer } from './styles';
import ItemsData from 'mock/navData';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle((prevState) => !prevState);

  const closeMenu = () => setToggle(false);

  return (
    <NavbarContainer>
      <ul className={toggle ? 'lista active' : 'lista'}>
        {ItemsData.map((item) => (
          <li key={item.id} className="app_flex p-text">
            <div />
            <Link to={item.to} className="link-nav" onClick={closeMenu}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="toggle" onClick={handleClick}>
        {toggle ? <HiX /> : <HiMenuAlt4 />}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
