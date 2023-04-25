'use client'

import React, { useState } from "react";
import './navbar.css';
import NavItem from "./NavItem";

const MENU_LIST = [
    { text: "Campaigns", href: "/campaigns" },
    { text: "Generators", href: "/generators" },
    { text: "Resources", href: "/resources" },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState<any>(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className={`nav`}>

                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;