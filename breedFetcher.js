const request =  require('request');
const fetchBreedDescription = (breedName, callback) => {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(err, response, body) {
    if (err !== null) {
      callback(err, null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback(null, 'Breed not found');
    } else {
      callback(null, data[0].description);
    }
  });

};

module.exports = { fetchBreedDescription };