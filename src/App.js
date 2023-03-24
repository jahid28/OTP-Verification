//i have deleted node-module files so it will not run
//i have deleted node-module files so it will not run
//i have deleted node-module files so it will not run
//i have deleted node-module files so it will not run
//i have deleted node-module files so it will not run
import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './Login';
import Mainpage from './Main';

function App() {
const [user] = useAuthState(auth);
return (
	user ? <Mainpage/> : <Login/>
);
}

export default App;



