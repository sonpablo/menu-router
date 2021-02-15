import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
export default function Menu({ routes }) {

    return (
        <div>
            <nav className='nav-container'>
                <ul >
                    <li>
                        <NavLink
                            activeClassName='nav-Link-active'
                            exact
                            to='/'>Page one</NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName='nav-Link-active'
                            to='/page-two'>Page two</NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName='nav-Link-active'
                            to='/page-three'>Page three</NavLink>
                    </li>
                </ul>
            </nav>
            <section className='section-routes'>
                {routes}
            </section>
        </div>
    )
}