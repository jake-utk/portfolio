import React, { useContext } from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { AppContext } from "../../AppContext";

const BurgerMenu = () => {
	const { menuOpenState, setMenuOpenState } = useContext(AppContext);

	function toggleMenu(e) {
		menuOpenState ? setMenuOpenState(false) : setMenuOpenState(true)
		// e.preventDefault();
		// setMenuOpenState(false);
    }
    
    function setOpen() {
        setMenuOpenState(true)
    }

	return (
		<div>
			<Menu right width={"175px"} isOpen={menuOpenState} onClick={setOpen}>
				<Link to='/' className='bm-item' onClick={toggleMenu}>
					Home
				</Link>
				<Link to='/aboutme' className='bm-item' isOpen={false} onClick={toggleMenu}>
					About Me
				</Link>
				<Link to='/projects' className='bm-item' onClick={toggleMenu}>
					Projects
				</Link>
				<Link to='/resume' className='bm-item' onClick={toggleMenu}>
					Resume
				</Link>
				<Link to='/contact' className='bm-item' onClick={toggleMenu}>
					Contact
				</Link>
			</Menu>
		</div>
	);
};

export default BurgerMenu;
