const config 		= require('./config_server');
const express 	= require('express');
const server	 	= express();
const port 			= config.port;

server.get('/', (req, res) => res.send('Hello World!'));

// Mimi API endpoint
server.get('/weapons', function(req, res) {

	// Set header for CORS
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Data object
	res.send(
		[
			{
				"id": 1,
				"name": "Knife",
				"price": 500,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/d/dc/Css_glock16.png",
				"isUnavalable": true,
			},
			{
				"id": 2,
				"name": "Desert Eagle",
				"price": 1800,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/5/52/Css_deagle.png",
				"isOwned": true
			},
			{
				"id": 3,
				"name": "Machine Gun",
				"price": 4500,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/thumb/9/9e/Css_aug.png/600px-Css_aug.png",
				"isNew": false,
			},
			{
				"id": 4,
				"name": "Sniper Rifle",
				"price": 6000,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/thumb/b/b4/Css_awp.png/600px-Css_awp.png",
				"created": 1552351355
			},
			{
				"id": 1,
				"name": "Knife",
				"price": 500,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/d/dc/Css_glock16.png",
				"isUnavalable": true,
			},
			{
				"id": 2,
				"name": "Desert Eagle",
				"price": 1800,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/5/52/Css_deagle.png",
				"isOwned": true
			},
			{
				"id": 3,
				"name": "Machine Gun",
				"price": 4500,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/thumb/9/9e/Css_aug.png/600px-Css_aug.png",
				"isNew": false,
			},
			{
				"id": 4,
				"name": "Sniper Rifle",
				"price": 6000,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/thumb/b/b4/Css_awp.png/600px-Css_awp.png",
				"created": 1552351355
			},
			{
				"id": 1,
				"name": "Knife",
				"price": 500,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/d/dc/Css_glock16.png",
				"isUnavalable": true,
			},
			{
				"id": 2,
				"name": "Desert Eagle",
				"price": 1800,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/5/52/Css_deagle.png",
				"isOwned": true
			},
			{
				"id": 3,
				"name": "Machine Gun",
				"price": 4500,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/thumb/9/9e/Css_aug.png/600px-Css_aug.png",
				"isNew": false,
			},
			{
				"id": 4,
				"name": "Sniper Rifle",
				"price": 6000,
				"image": "https://cdn.wikimg.net/en/strategywiki/images/thumb/b/b4/Css_awp.png/600px-Css_awp.png",
				"created": 1552351355
			}
		]
	);
});

server.listen(port, () => console.log(`In-Game Store API listens on ${port}!`));
