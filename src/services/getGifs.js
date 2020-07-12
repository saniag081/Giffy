const apiKEY = '0fep6C0cV0ALqcZR0kKHCowoV7iydMQT&q';

export default async function getGifs({keyword= 'rick'} = {}) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}=${keyword}&limit=10&offset=0rating=g&lang=en`;
	const request = await fetch(apiURL);
	const dataGifs = await request.json();
	const {data} = dataGifs
	const gifs = data.map(image => {
		const { images, title, id } = image;
		const { url } = image.images.downsized_medium;
		return {url, images, title, id}
	})
		return gifs
}