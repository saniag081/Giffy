import React, {useEffect, useState} from 'react';
import getGifs from '../services/getGifs';

function UseGifs({ keyword }) {
	const [gifs, setGifs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(function () {
		setLoading(true)
		// revcuperar la keywor del local storage
		const keyworToUse = keyword || localStorage.getItem('lastKeyword')
		getGifs({ keyword : keyworToUse}).then(gifs => {
			setGifs(gifs);
			setLoading(false);
			//guardamos la keyword en el local storage
			localStorage.setItem('lastKeyword', keyword)
		})
	}, [keyword]);
	return {loading, gifs}
}

export default UseGifs;