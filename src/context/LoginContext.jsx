import React, { useState, useEffect, createContext } from 'react';
import ListItems from 'config/ListItems.json';

export const LoginContext = createContext();

export const LoginProvider = (props) => {

	const [ userInfo, setUserInfo ] = useState({
		loggedIn: false,
		username: null,
		balance: 25,
		listItems: ListItems,
		counterId: 4 // This is a poor way to keep track but since we're using a static JSON file, we will use it
	});


	useEffect(() => {
		let user = localStorage.getItem('payRangeUser');
		if ( user ) {
    		setUserInfo(prevState => ({ ...prevState, loggedIn: true, username: user }));
		}
	}, []);

	const loginUser = async (email) => {
		await new Promise((resolve) => setTimeout(() => {
			setUserInfo(prevState => ({ ...prevState, loggedIn: true, username: email }));
     		localStorage.setItem('payRangeUser', email);
			resolve();
		}, 1000 ));
    }

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

    const removeMachine = (index) => {
    	setUserInfo(prevState => ({ 
    		...prevState,  
    		listItems: {
    			devices: prevState.listItems.devices.filter((_, i) => i !== index)
    		}
    	}));
    }

    const addBalance = () => {
    	setUserInfo(prevState => ({
    		...prevState, 
    		balance: prevState.balance + 5
    	}));
    }


	return (
		<LoginContext.Provider value={{ userInfo: userInfo, loginUser: loginUser, logoutUser: logoutUser, 
										addMachine: addMachine, removeMachine: removeMachine, addBalance: addBalance }}>
			{ props.children }
		</LoginContext.Provider>

	);

}