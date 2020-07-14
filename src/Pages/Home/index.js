import React, {useState} from 'react';
import '../../components/styles/Home.css'
import { Link, useLocation } from 'wouter';

const POPULAR_GIFS = ['Colombia', 'Rick', 'Morty'];

function Home() {
	const [keyword, setKeyword] = useState('');
	const [path, pushLocation] = useLocation();

	const handleSubmit = evt => {
		//navegar en una ruta
		evt.preventDefault()
		pushLocation(`search/:${keyword}`)
	}
	const handleChange = evt => {
		setKeyword(evt.target.value)
	}
	return (
		<>
			<div className="home">
				<form onSubmit={handleSubmit}>
					<input type="text" value={keyword} onChange={handleChange} placeholder="Search a gif here.."/>
				</form>
				<h1>Los gifs mas populares</h1>
				<ul>
					{POPULAR_GIFS.map((popularGifs) => (
						<li key={popularGifs}>
							<Link to={`/search/:${popularGifs}`} > Gif {popularGifs}</Link>
						</li>
						))}
				</ul>
			</div>
		</>
	)
}

export default Home;