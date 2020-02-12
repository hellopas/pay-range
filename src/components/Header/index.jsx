/* Import 3rd party libraries */
import React, { Component, useContext } from 'react';

import { LoginContext } from 'context/LoginContext';

/* Import styles and media */
import './Header.scss';
import LogoutBtn from './img/logout.png';

const Header = ({ text, loggedIn, add, cb }) => {

	const { logoutUser } = useContext(LoginContext);

	if (loggedIn) {

		return (
			<div className='header-logout'>
				<div className='header-logout__button'>
					<img src={LogoutBtn} alt='logout' onClick={logoutUser}/>
				</div>
				<div className='header-logout__title'>{text}</div>
				{add && <div className='header-logout__add' onClick={cb}>
					+
				</div>}
 			</div>
		)
	}

	return( 
		<div className='header'>
    		{text}
 		</div>
	);
};

export default Header;
