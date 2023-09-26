fetch('https://developer.nps.gov/api/v1/alerts?parkCode=dena&limit=10&api_key=0ilOFP8jTC2LMrwXFTullFqvHyVhBh9aHVW3OWEb'
	)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
