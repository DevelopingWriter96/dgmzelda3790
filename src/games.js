import React from 'react';

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://the-legend-of-zelda.p.rapidapi.com/games',
  params: {page: '0', limit: '50'},
  headers: {
    'x-rapidapi-key': 'e1a4406bcfmsh1c706f23c25de88p11a730jsnef75e980fece',
    'x-rapidapi-host': 'the-legend-of-zelda.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

function Game() {
    return (
        <div>
            <h1>Games</h1>
            
        </div>
    )
};

export default Game;