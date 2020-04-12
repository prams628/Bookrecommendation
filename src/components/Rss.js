import React from "react"

var sectionStyle = {
	fontFamily: "Handlee",
    color: "#4A1137",
    fontSize: "25px"
}


class Rss extends React.Component{
	constructor(){
		super();
		this.state = {
			recentInfo: {
				name: '',
				url: '',
				description: ''
			}
		}
	}

	RssFetchData(){
		var request = new XMLHttpRequest()
		var feed = document.getElementById("feed")
		feed.innerHTML = ""
		request.onreadystatechange = () => {
			if(request.readyState == 4 && request.status == 200){
				var myObj = JSON.parse(request.responseText);
				for (var i=0; i < myObj.items.length; i++) {
					console.log(myObj.items[i].title)
					console.log(myObj.items[i].link)

	        		this.state.recentInfo.name = myObj.items[i].title
	          		this.state.recentInfo.url = myObj.items[i].link
	          		this.state.recentInfo.description = myObj.items[i].description
	        			 
	      			var anchor = document.createElement("a")
	      			anchor.align = "center"
	      			anchor.innerHTML = this.state.recentInfo.name
	      			anchor.class = "a"
	      			anchor.href = this.state.recentInfo.url
	      			var br = document.createElement("br")

	      			var desc = document.createElement("p")
	      			var desc1 = this.state.recentInfo.description
	      			var desc2 = desc1.substring(desc1.indexOf("<p>"), desc1.length)
                    // console.log(desc2)
                    desc.innerHTML = desc2;
	      			feed.appendChild(br)
	      			feed.appendChild(anchor)
	      			feed.appendChild(desc)

				}
			}
		}
			request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.bookstellyouwhy.com%2Frss.xml", true);
	    	request.send();
	}

	componentDidMount() {
    	{this.RssFetchData()}
  	}

	render(){
		return (
			<div id="feed" style = { sectionStyle }></div>
		)
	}
}

export default Rss