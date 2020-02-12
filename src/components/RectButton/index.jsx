/* Import 3rd party libraries */
import React, { Component } from 'react';

/* Import styles */
import './RectButton.scss';


export default class RectButton extends Component {
  

  componentDidMount() {

  }


  render() {
    const { loading, text, cb } = this.props;

    return (
      <>
          {loading && <div className='rectbutton__loading'>
            Loading ...
          </div>}

          {!loading && <div className='rectbutton' onClick={cb}>
            {text}
          </div>}

      </>

    );
  }
}
