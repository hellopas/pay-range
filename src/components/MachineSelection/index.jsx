/* Import 3rd party libraries */
import React, { Component } from 'react';

/* Import styles */
import './MachineSelection.scss';


/* Import my components */
import Header from 'components/Header';
import { LoginContext } from 'context/LoginContext';
import SingleWasher from 'components/SingleWasher';


export default class MachineSelection extends Component {
  
  /**
   * Maps through all the items in the list of machines and renders 
   * each one with the appropriate info.
   */
  renderMachines() {
    const { userInfo, removeMachine } = this.context; // Accessing the Login context

    return (
      <>
        {userInfo.listItems.devices.map((item, index) => (
           <SingleWasher key={`singlewasher-${index}`} cb={removeMachine} index={index}
                         id={item.id} label={item.label} status={item.status} />
        ))}
      </>
    );
  }

  render() {
    const { userInfo, addMachine, addBalance } = this.context; // Accessing the Login context
    let balance = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(userInfo.balance); // Converts balance into $XX.XX format

    return (
      <>
        <div className='machineselection'>
          <Header text='Machine Selection' loggedIn='true' add='true' cb={addMachine}/>
          
          <div className='machineselection__body'>
            {
              this.renderMachines()
            }
            <div className='machineselection__body-break'></div>
          </div>        
        </div>

        <div className='machineselection__footer'>
            <div className='machineselection__footer-balance'>
              Balance: {balance}
            </div>

            <div className='machineselection__footer-button' onClick={addBalance}>
              <div>+</div>
            </div>
        </div>
      </>

    );
  }
}


MachineSelection.contextType = LoginContext;

