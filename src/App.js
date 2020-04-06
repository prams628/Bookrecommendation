import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from "./components/Header"
import Books from "./components/Books"
import fire from "./Fire"
import Login from "./components/Login"

class App extends React.Component {

	constructor() {
	    super();
	    this.state = ({
	      user: null,
	    });
	    this.authListener = this.authListener.bind(this);
	}

	componentDidMount() {
    this.authListener();
  	}

  	authListener() {
    	fire.auth().onAuthStateChanged((user) => {
      		console.log(user);
      		if (user) {
        		this.setState({ user });
        		localStorage.setItem('user', user.uid);
      		} 
      		else {
        		this.setState({ user: null });
        		localStorage.removeItem('user');
      		}
    	});
  	}	

  	render(){
	  	return (
	    	<div className="App">
	    		{this.state.user ? (
	    			<div>
	    				<Header />
	    				<Books />
	    			</div>
	    		) :
	    		(
	    			<Login />
	    		)}
	    	</div>
	  	)
	}
}

export default App;
