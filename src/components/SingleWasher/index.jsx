/* Import 3rd party libraries */
import React from 'react';

/* Import styles and media */
import './SingleWasher.scss';

/**
 * Renders a single washer machine element on the logged in page.
 *
 * @param {Func} cb - Callback when remove button is clicked.
 * @param {Int} index - Index of the single element in the array
 * @param {Int} id - Id of the single element in the array
 * @param {String} label - Label of the single element
 * @param {String} status - Busy or available for the single element 
 */
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
