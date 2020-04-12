import React from "react"
import fire from "../Fire"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Recommendation from "./Recommendation"
import Books from "./Books"
import Rss from "./Rss"

var styleSection = {
	fontSize: "75px", 
	fontFamily: "Bangers"
}

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
					      <a className="navbar-brand" style={styleSection} href="#">Boogle</a>
					    </div>
						    <ul className="nav navbar-nav navbar-right">
						      <li><Link to="/recommendation"><span className="glyphicon glyphicon-book"></span> Recommendations</Link></li>
						      <li><Link to="/books"><span className="glyphicon glyphicon-search"></span> Books</Link></li>
						      <li><Link to="/news"><span className="glyphicon glyphicon-paperclip"></span> News</Link></li>
						      <li><a href="#" onClick={this.logout}><span className="glyphicon glyphicon-log-out"></span> Log Out</a></li>
						    </ul>
					  </div>
					</nav>
				<Route exact path="/recommendation" component={ Recommendation }/>
				<Route exact path="/books" component={ Books }/>
				<Route exact path="/news" component={ Rss }/>
			</Router>
		)
	}
}

export default Header