import React from "react"

const BookCard = (props) => {
	return(
		<div className="card">
			<img src={props.image} alt="" />
			<div className="description">
				<h2>{props.title}</h2>
				<h3>Authors: {props.authors}</h3>
				<a href={props.link}>View Here</a>
			</div>
		</div>
	)
}

export default BookCard