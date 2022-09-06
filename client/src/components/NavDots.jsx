import React from "react";
import { Link } from "react-scroll";

import ItemsData from "./Navbar/itemsData";

const NavDots = ({ active }) => {
    return (
        <div className="app__nav">
            {ItemsData.map(item => (
                <Link
                    to={item.to}
                    key={item.id}
                    className="app__nav-dot"
                    style={{ backgroundColor: `${active === item.title.toLowerCase() && "#313bac"}` }}
                />
            ))}
        </div>
    );
}

export default NavDots;