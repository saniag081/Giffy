import React from 'react';
import Header from '../../components/Header';

function Detail ({ params }){
	console.log(params)
	return (
		<>
			<Header/>
			<h3>Id: {params.id}</h3>
		</>
	)
}

export default Detail;