const request = require('request');

const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data);
    } else {
      console.log("No matching cat breeds.");
    }
  }
});