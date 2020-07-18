import React from 'react';
import './styles/ListIfGifs.css'
import useGifs from '../hooks/UseGifs';
import Gif from './Gif';

function ListOfGifs({keyword}) {
	const {loading, gifs} = useGifs({ keyword })

	if(loading) return <h4>Cargando...</h4>
	return (
		<div className="c-grid-box">
			{
				gifs.map(({id, title, url}) =>
				<Gif
					key={id}
					title={title}
					url={url}
					id={id}
				/>)
				}
		</div>
	)
}

export default ListOfGifs;