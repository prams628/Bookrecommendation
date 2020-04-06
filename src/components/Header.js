import React from "react"
import fire from "../Fire"

class Header extends React.Component{

	constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render(){
		return(
			<header>
				<i className="fa fa-book fa-2x" aria-hidden="true"></i>
				<h1>Boogle</h1>
				<button style={{float: 'right'}} onClick={this.logout}>Logout</button>
			</header>
		)
	}
}

export default Header