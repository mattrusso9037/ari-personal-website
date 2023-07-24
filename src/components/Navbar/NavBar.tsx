import * as React from 'react';
import './navbar.scss';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AppContext } from '../../contexts/app/appContext';

export const NavBar: React.FC = () => {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const { showNav } = React.useContext(AppContext);

    function getClass(route: string): string {
        if (location.pathname.toLowerCase() === route.toLowerCase()) {
            return 'active';
        }
        return '';
    }

    function onMenuClick() {
        setShowMenu(!showMenu);
    }

    return (
        <div className={`Navbar ${showNav ? 'show' : 'hide'}`}>
            <div className='navbar_wrapper'>
                <div>
                    {showMenu ? <svg className='close_icon' onClick={onMenuClick} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg> :
                        <svg onClick={onMenuClick} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" /></svg>}
                    <img src={'/assets/icons/MainLogo.svg'} />
                </div>
                <div className={`link_container ${showMenu ? 'show' : 'hide'}`}>
                    <li onClick={onMenuClick} className={`${getClass('/')}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={onMenuClick} className={`${getClass('/about')}`}>
                        <Link to="/About">About</Link>
                    </li>
                    <li onClick={onMenuClick} className={`${getClass('/projects')}`}>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li onClick={onMenuClick} className={`${getClass('/contact')}`}>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </div>
            </div>
        </div>
    )
};
