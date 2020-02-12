/* Import 3rd party libraries */
import React, { Component } from 'react';

/* Import styles and media */
import './SingleWasher.scss';

const SingleWasher = ({ cb, index, id, label, status }) => {

	return( 
		<div className='singlewasher'>
    		<div className='singlewasher__id'>
    			{id}
    		</div>

    		<div className='singlewasher__body'>

    			<div className='singlewasher__body-label'>
    				{label}
				</div>	

				<div className='singlewasher__body-available'>
					{status}
				</div>	

    		</div>

    		<div className='singlewasher__button' onClick={ () => { cb(index) } }>
    			<div>-</div>
    		</div>	


 		</div>
	);
};

export default SingleWasher;
