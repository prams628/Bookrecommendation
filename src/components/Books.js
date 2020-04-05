import React from "react"
import SearchArea from "./SearchArea"
import request from "superagent"
import ListBooks from "./ListBooks"
import Background from "../images/book.jpg"

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover'
};

class Books extends React.Component{
	constructor(props){
			super(props);
			this.state = {
				books: [],
				searchField: '',
				sort: ''
			}
	};

	searchHandle = (e) => {
		// console.log(e.target.value)
		this.setState({searchField: e.target.value})
	}

	bookSearch = (e) => {
		e.preventDefault()

		request.get("https://www.googleapis.com/books/v1/volumes").query({ q:this.state.searchField })
		.then((data) => {
			console.log(data)
			const cleanData = this.dataCleaning(data)
			this.setState({ books: cleanData }) 
		})
	}

	sortHandle = (e) => {
		console.log(e.target.value)
		this.setState({ sort: e.target.value })
	}

	dataCleaning = (data) => {
		const cleanData = data.body.items.map((book) => {
			if(book.volumeInfo.hasOwnProperty('publishedDate') === false){
				book.volumeInfo['publishedDate'] = "0000";
			}
			else if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
				book.volumeInfo['imageLinks'] = {thumbnail: "https://lh3.googleusercontent.com/proxy/YuMna5FuwMKgyidZph7jluMRFvdpW_fh7kfTWtXX7zDDLTaV7wyP6QEvVTvJ6VogqYcNfkwT18m6yg54NQwJredcz3s_CeNc54a-XD_ceTTgfGm7y2G_1XvppcfojtVo"}
			}

			return book
		})

		return cleanData
	}

	render(){
		const booksSorted = this.state.books.sort((a,b) => {
			if(this.state.sort === "Newest"){
				return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
			}

			else if(this.state.sort === "Oldest"){
				return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
			}
		})
		return(
			<div style = { sectionStyle }>
				<SearchArea bookSearch={this.bookSearch} sortHandle={this.sortHandle} searchHandle={this.searchHandle} />
				<ListBooks books={booksSorted} />
			</div>
		)
	}
}

export default Books
