import React from 'react';
import ListOfGifs from '../../components/listOfGifs';
import Header from '../../components/Header';

function SearchResults({params}) {
	const { keyword } = params;
	// console.log(keyword)
	return (
		<>
			<Header />
			<ListOfGifs keyword={keyword}/>
		</>
	)
}

export default SearchResults;