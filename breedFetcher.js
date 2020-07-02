const request =  require("request");
const args = process.argv.slice(2);
const race =  args[0].slice(0, 4).toLowerCase();
request.get(`https://api.thecatapi.com/v1/images/search?breed_id=${race}`, function(error, response, body) {
  if (error !== null) {
    console.log('Error: Request failed.');
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('Error: Breed not found.');
  } else {
    console.log(data[0]);
  }
});
