/* Import 3rd party libraries */
import React, { useContext } from 'react';

/* Import my components */
import { LoginContext } from 'context/LoginContext';

/* Import styles and media */
import './Header.scss';
import LogoutBtn from './img/logout.png';

/**
 * Renders a version of the header at the top of the application based on 
 * whether the user is logged in.
 *
 * @param {String} text - The title of the header
 * @param {Boolean} loggedIn 
 * @param {Boolean} add - A plus button that takes a call back 
 * @param {Func} cb - A callback function for the plus button
 */
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
