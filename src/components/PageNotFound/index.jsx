/* Import 3rd party libraries */
import React, { Component } from 'react';
import { Redirect } from "react-router";

export default class PageNotFound extends Component {

  // This currently redirects to homepage. But we can change it in the future 
  // to show a better page not found.
  
  render() {

    return (
      <div className='pagenotfound'>
        <Redirect to='/' />
      </div>

    );
  }
}
