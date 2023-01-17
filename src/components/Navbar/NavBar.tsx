import * as React from 'react';
import './navbar.scss';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const NavBar: React.FC = () => {
    const location = useLocation();

    function getClass(route: string): string {
        if (location.pathname.toLowerCase() === route.toLowerCase()) {
            return 'active';
        }
        return '';
    }

    return (
        <div className={'Navbar'}>
            <div className='navbar_wrapper'>
                <div>
                    <img src={'/assets/icons/ab_icon.svg'} />
                    <div className='tagline'>Ariana Brennan <img src={'/assets/icons/stars.svg'} /> UX/UI Designer & Researcher</div>
                </div>
                <div className={'link_container'}>
                    <li className={`${getClass('/')}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`${getClass('/about')}`}>
                        <Link to="/About">About</Link>
                    </li>
                    <li className={`${getClass('/projects')}`}>
                        <Link to="#">Projects</Link>
                    </li>
                    <li className={`${getClass('/contact')}`}>
                        <Link to="#">Contact</Link>
                    </li>
                </div>
            </div>
        </div>
    )
};
