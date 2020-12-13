import React, { Component } from 'react';

var axios = require("axios").default;

let pageNum = "0";

function dataLoop(){

var options = {
  method: 'GET',
  url: 'https://the-legend-of-zelda.p.rapidapi.com/characters',
  params: {limit: '200', page: pageNum},
  headers: {
    page: pageNum,
    limit: '200',
    name: 'Link',
    'x-rapidapi-key': 'e1a4406bcfmsh1c706f23c25de88p11a730jsnef75e980fece',
    'x-rapidapi-host': 'the-legend-of-zelda.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

while (pageNum <=10){
    dataLoop();
    pageNum++;
}

class Characters extends Component {
    render() {
        return ( 
            <div>
                <h1>Characters</h1>
            </div>
        )
    }
}

export default Characters;