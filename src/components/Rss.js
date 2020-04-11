import React from "react"

class Rss extends React.Component{
	constructor(){
		super();
		this.state = {
			recentInfo: {
				name: '',
				url: ''
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
				for (var i = 0; i < myObj.items.length; i++) {
					console.log(myObj.items[i].title)
					console.log(myObj.items[i].link)

            		this.state.recentInfo.name = myObj.items[i].title
              		this.state.recentInfo.url = myObj.items[i].link
            			 
          			var anchor = document.createElement("a")
          			anchor.align = "center"
          			anchor.innerHTML = this.state.recentInfo.name
          			anchor.class = "a"
          			anchor.href = this.state.recentInfo.url
          			var br = document.createElement("br")
          			feed.appendChild(br)
          			feed.appendChild(anchor)
				}
			}
		}
		request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bookbrowse.com%2Frss%2Fbook_news.rss", true);
    	request.send();
	}

	componentDidMount() {
    	{this.RssFetchData()}
  	}

	render(){
		return (
			<div id="feed"></div>
		)
	}
}

export default Rss