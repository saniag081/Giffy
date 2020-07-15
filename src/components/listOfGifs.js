import React, {useEffect,useState} from 'react';
import './styles/ListIfGifs.css'
import getGifs from '../services/getGifs';
import Gif from './Gif';

function ListOfGifs({keyword}) {
	const [gifs, setGifs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(function () {
		setLoading(true)
		getGifs({ keyword }).then(gifs => {
			setGifs(gifs);
			setLoading(false);
		})
	}, [keyword]);

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