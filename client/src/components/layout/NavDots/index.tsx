import React from 'react';
import { Link } from 'react-scroll';

import ItemsData from 'mock/navData';

interface INavDotsProps {
  active: string;
}

const NavDots: React.FC<INavDotsProps> = ({ active }) => (
  <div className="app__nav">
    {ItemsData.map((item) => (
      <Link
        to={item.to}
        key={item.id}
        className="app__nav-dot"
        style={{
          backgroundColor: `${
            active === item.title.toLowerCase() && '#313bac'
          }`,
        }}
      />
    ))}
  </div>
);

export default NavDots;
