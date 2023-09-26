fetch('https://api.weather.gov/gridpoints/TOP/32,81/forecast/hourly'
	)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));