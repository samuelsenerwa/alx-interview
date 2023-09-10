#!/usr/bin/node
const request = require('request');
const API_URL = 'https://swapi-api.hbtn.io/api';

if(process.argv.length > 2) {
	request(`${API_URL}/films/${process.argv[2]}/`, (err, _, body) => {
		if (err) {
			console.log(err);
		}
		const charactersURL = JSON.parse(body).characters;
		const charactersName = charactersURL.map(
			url => new Promise((resolve, reject) => {
				request(url, (promisErr, _, charactersReqBody) => {
					if (promiseErr) {
						reject(promisErr);
					}
					resolve(JSON.parse(charactersReqBody).name);
				});
			}));
		promise.all(charactersName)
		.then(names => console.log(names.join('\n')))
		.catch(allErr => console.log(allErr));
	});
}
