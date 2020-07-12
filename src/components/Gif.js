import React from 'react';
import '../components/styles/Gif.css'

function Gif({title, url, id}) {
	return (
		<a href={`#${id}`} className="gif">
			<div className="gif-content">
				<h4>{title}</h4>
				<img src={url} alt={title} className="gif-img"/>
			</div>
		</a>
	)
}

export default Gif;