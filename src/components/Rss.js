import React from "react"

var sectionStyle = {
	fontFamily: "Handlee",
    color: "#4A1137",
    fontSize: "25px"
}


class Rss extends React.Component{
	constructor(){
		super();
		this.myref = React.createRef();
		this.request = {}
		this.obj = {
			state: {
				name: '',
				url: '',
				description: '',
				i:0
			},
			getNews: () => {
				this.request = new XMLHttpRequest()
				this.request.onreadystatechange = this.obj.processNews
				this.request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.bookstellyouwhy.com%2Frss.xml", true);
	    		this.request.send();
			},
			processNews: () => {
				if(this.request.readyState == 4 && this.request.status == 200 && this.obj.state.i < 10){
					var myObj = JSON.parse(this.request.responseText)
					var feed = document.getElementById("feed")
					console.log(myObj.items[this.obj.state.i].title)
					console.log(myObj.items[this.obj.state.i].link)

	        		this.obj.state.name = myObj.items[this.obj.state.i].title
	          		this.obj.state.url = myObj.items[this.obj.state.i].link
	          		this.obj.state.description = myObj.items[this.obj.state.i].description
	        			 
	      			var anchor = document.createElement("a")
	      			anchor.align = "center"
	      			anchor.innerHTML = this.obj.state.name
	      			anchor.class = "a"
	      			anchor.href = this.obj.state.url
	      			var br = document.createElement("br")

	      			var desc = document.createElement("p")
	      			var desc1 = this.obj.state.description
	      			var desc2 = desc1.substring(desc1.indexOf("<p>"), desc1.length)
                    // console.log(desc2)
                    desc.innerHTML = desc2;
	      			feed.appendChild(br)
	      			feed.appendChild(anchor)
	      			feed.appendChild(desc)
	      			this.obj.state.i += 1
					}
				}
			}
	}	

	componentDidMount() {
		this.obj.getNews();
        setInterval(this.obj.getNews,7500);
  	}

	render(){
		return (
			<div id="feed" style = { sectionStyle } ref = {this.myref}>
				<h1 style= {{textAlign: "center"}}> NEWS</h1>
			</div>
		)
	}
}

export default Rss