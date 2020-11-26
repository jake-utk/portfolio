import React from 'react';
import "./BurgerMenu.css"
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

const BurgerMenu = () => {
    return (
        <div>
            <Menu right>
                <Link to='/' className='bm-item'>Home</Link>
                <Link to='/aboutme' className='bm-item'>About Me</Link>
                <Link to='/projects' className='bm-item'>Projects</Link>
                <Link to='/resume' className='bm-item'>Resume</Link>
                <Link to='/contact' className='bm-item'>Contact</Link>
            </Menu>
        </div>
    );
};

export default BurgerMenu;