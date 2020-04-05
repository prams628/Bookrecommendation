import React from "react"
import BookCard from "./BookCard"

const ListBooks = (props) => {
	return(
		<div className="lists">
		{
			props.books.map((book, index) => {

				return <BookCard 
					key = {index}
					image = {book.volumeInfo.imageLinks.thumbnail}
					title = {book.volumeInfo.title}
					authors = {book.volumeInfo.authors}
					link = {book.volumeInfo.infoLink}
				/>
			})
		}
		</div>
	)
}

export default ListBooks