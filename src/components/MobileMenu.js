import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.css';

const styleMenuHide = 'mobile-menu-list hide'
const styleMenuShow = 'mobile-menu-list show'

export default function MobileMenu({ routes }) {
    const [ulStyle, setStyle] = useState(styleMenuHide)

    const onClick = () => {
        setStyle(prevValue => prevValue === styleMenuHide
            ? styleMenuShow
            : styleMenuHide
        )
    }

    return (
        <>
            <nav className='mobile-menu-container' >
                <header >
                    <button onClick={onClick}>Menú</button>
                </header>
                <ul className={ulStyle} >
                    <li onClick={onClick}>
                        <NavLink
                            activeClassName='nav-Link-active'
                            exact
                            to='/'>Page one</NavLink>
                    </li>
                    <li onClick={onClick}>
                        <NavLink
                            activeClassName='nav-Link-active'
                            to='/page-two'>Page two</NavLink>
                    </li>
                    <li onClick={onClick}>
                        <NavLink
                            activeClassName='nav-Link-active'
                            to='/page-three'>Page three</NavLink>
                    </li>
                </ul>
            </nav>
            <section className='section-routes'>
                {routes}
            </section>
        </>
    )
}