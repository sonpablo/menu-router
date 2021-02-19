import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
export default function Menu({ routes }) {

    return (
        <>
            <nav data-testid='navbar' className='nav-container'>
                <ul >
                    <li >
                        <NavLink
                            activeClassName='nav-Link-active'
                            data-testid='counter-page-link'
                            exact
                            to='/'>Counter page</NavLink>
                    </li>
                    <li >
                        <NavLink
                            activeClassName='nav-Link-active'
                            data-testid='page-two-link'
                            to='/page-two'>Page two</NavLink>
                    </li>
                    <li >
                        <NavLink
                            activeClassName='nav-Link-active'
                            data-testid='page-three-link'
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