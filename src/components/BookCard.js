import React from "react"

var sectionStyle = {
  backgroundColor: "#343a40",
  color: "white",
  textDecoration: "none",
  textTransform: 'uppercase',
}

const BookCard = (props) => {
	return(
		<div className="card">
			<img src={props.image} alt="" />
			<div className="description">
				<h2>{props.title}</h2>
				<h3>Authors: {props.authors}</h3>
				<a style = { sectionStyle } href={props.link}>View Here</a>
			</div>
		</div>
	)
}

export default BookCard