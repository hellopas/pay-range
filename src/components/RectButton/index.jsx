/* Import 3rd party libraries */
import React from 'react';

/* Import styles */
import './RectButton.scss';

/**
 * Renders a rectangular button ready to be clicked or in the loading state.
 *
 * @param {Boolean} loading - Dictates which button to draw
 * @param {String} text - Button label 
 * @param {Func} cb - Callback when button is clicked
 */
const Rect = ({ loading, text, cb }) => (
  <>
      {loading && <div className='rectbutton__loading'>
        Loading ...
      </div>}

      {!loading && <div className='rectbutton' onClick={cb}>
        {text}
      </div>}

  </>
)

export default Rect;