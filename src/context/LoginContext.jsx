/* Import 3rd party components */
import React, { useState, useEffect, createContext } from 'react';

/*Import my components */
import ListItems from 'config/ListItems.json';

// Creates React Context to be used by consumer components  
export const LoginContext = createContext();

export const LoginProvider = (props) => {

    const [ userInfo, setUserInfo ] = useState({
        loggedIn: false, // determines if Login page or machine selection page renders
        username: null, // email address 
        balance: 25,
        listItems: ListItems, // imported list of machines 
        counterId: 4 // This is a poor way to keep track but since we're using a static JSON file, we will use it
    });


    /**
     * Passing in [] as second argument in useEffects allows it to function similar to
     * componentDidMount. This effect will check local storage to see if the user is already 
     * logged in when the page first loads and change state accordingly.
     */
    useEffect(() => {
        let user = localStorage.getItem('payRangeUser');
        if ( user ) {
            setUserInfo(prevState => ({ ...prevState, loggedIn: true, username: user }));
        }
    }, []);

    /**
     * Handles login action. Uses a setTimeout to mock a typical API request to the server.
     * Using async/await with Promises to wait a second before changing state and storing in 
     * local storage. 
     *
     * @param {String} email
     */
    const loginUser = async (email) => {
        await new Promise((resolve) => setTimeout(() => {
            setUserInfo(prevState => ({ ...prevState, loggedIn: true, username: email }));
            localStorage.setItem('payRangeUser', email);
            resolve();
        }, 1000 ));
    }

    /**
     * Handles logout action. Resets state and deletes user from local storage.
     */
    const logoutUser = () => {
        localStorage.removeItem('payRangeUser');
        setUserInfo(prevState => ({
            loggedIn: false,
            username: null,
            balance: 25,
            listItems: ListItems,
            counterId: 4
        }));
    }

    /**
     * Handles adding a new machine to the list of machines in the logged in page.
     */
    const addMachine = () => {
        let newID = userInfo.counterId + 1;
        let newDevice = { "id": newID, "label": `Washer ${newID}`, "status": "Available" };


        setUserInfo(prevState => ({ 
            ...prevState,  
            counterId: newID, 
            listItems: {
                devices: prevState.listItems.devices.concat(newDevice)
            }
        }));
    }

    /**
     * Handles removing an individual machine from the list of machines.
     *
     * @param {Int} index - The index of the machine in the array
     */
    const removeMachine = (index) => {
        setUserInfo(prevState => ({ 
            ...prevState,  
            listItems: {
                devices: prevState.listItems.devices.filter((_, i) => i !== index)
            }
        }));
    }

    /**
     *  Handles increasing balance by 5 dollars.
     */
    const addBalance = () => {
        setUserInfo(prevState => ({
            ...prevState, 
            balance: prevState.balance + 5
        }));
    }

   /**
    * Renders the context provider around the children. Since the entire app is basically passed in through the 
    * children props, the entire app has access to this login context.
    */
    return (
        <LoginContext.Provider value={{ userInfo: userInfo, loginUser: loginUser, logoutUser: logoutUser, 
                                        addMachine: addMachine, removeMachine: removeMachine, addBalance: addBalance }}>
            { props.children }
        </LoginContext.Provider>

    );

}