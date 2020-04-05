import React from "react"

const SearchArea = (props) => {	
	return(
		<div className="search">
			<form action="">
				<input onChange={props.searchHandle} type="text" />
				<button type="submit" onClick={props.bookSearch}>Search</button>
				<select defaultValue="Sort" onChange={props.sortHandle}>
					<option disabled value="sort">Sort</option>
					<option value="Newest">Newest</option>
					<option value="Oldest">Oldest</option>
				</select>
			</form>
		</div>
	)
}

export default SearchArea
