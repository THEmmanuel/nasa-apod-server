// const axios = require('axios');
import axios from 'axios';
import express from 'express';

const url = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "6F5oevHn2pzNGHpLgWR32PrbR2MIn61GdnryrxeP";
let nasaImage = ''
const app = express()

const fetchData = async () => {
	try {
		await axios.get(`${url}${api_key}`)
			.then(res => {
				nasaImage = res.data.url
			})
	} catch (error) {
		console.log(error)
	}
	console.log(nasaImage)
	// return 'hey';
}

fetchData();

// Starts server
app.get('/', (req, res) => {
	res.redirect(nasaImage.toString())
})

app.listen(8080, (req, res) => {
	console.log('running at port 8080');
})
// console.log('nasa image' + nasaImage)