import React from "react"
import fire from "../Fire"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Recommendation from "./Recommendation"
import Books from "./Books"

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
			<Router>
					<nav className="navbar navbar-inverse">
					  <div className="container-fluid">
					    <div className="navbar-header">
					      <a className="navbar-brand" href="#">Boogle</a>
					    </div>
						    <ul className="nav navbar-nav navbar-right">
						      <li><Link to="/recommendation"><a href="#"><span className="glyphicon glyphicon-book"></span> Recommendations</a></Link></li>
						      <li><Link to="/books"><a href="#"><span className="glyphicon glyphicon-search"></span> Books</a></Link></li>
						      <li><a href="#" onClick={this.logout}><span className="glyphicon glyphicon-log-out"></span> Log Out</a></li>
						    </ul>
					  </div>
					</nav>
				<Route exact path="/recommendation" component={ Recommendation }/>
				<Route exact path="/books" component={ Books }/>
			</Router>
		)
	}
}

export default Header