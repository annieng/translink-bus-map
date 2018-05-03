import * as types from './actionTypes'
// var host = process.env.HOST || '0.0.0.0';
// var port = process.env.PORT || 8080;

// var cors_proxy = require('cors-anywhere');


const request = require('superagent')

// cors_proxy.createServer({
//   originWhitelist: [], // Allow all origins
//   requireHeader: ['origin', 'x-requested-with'],
//   removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function () {
//   console.log('Running CORS Anywhere on ' + host + ':' + port);
// });

export function receiveBusses(json) {
  return {type: types.RECEIVE_BUSSES, busses: json}
}

export function fetchBusses() {
  return dispatch => {
    //const url = 'http://api.translink.ca/rttiapi/v1/buses?apikey=d3oX05CBjgbrmmeUoAzm'
    const url = 'http://api.translink.ca/rttiapi/v1/buses?apikey=d3oX05CBjgbrmmeUoAzm'
    const proxyurl = 'cors-anywhere.herokuapp.com/'
    return request
    .get('https://' + proxyurl + url)
    .query('d3oX05CBjgbrmmeUoAzm')
    .set('Accept', 'application/json')
    .buffer(true)
    //.set("Access-Control-Allow-Origin", "*")
    //.withCredentials()
    .then(res => res.body)
    .then(json => dispatch(receiveBusses(json)))
    .catch(err => console.log(err))
  }
}

