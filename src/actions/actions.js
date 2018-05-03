import * as types from './actionTypes'

const request = require('superagent')


export function receiveBusses(json) {
  return {type: types.RECEIVE_BUSSES, busses: json}
}

export function fetchBusses() {
  return dispatch => {
    // fixing cors error 
    const url = 'http://api.translink.ca/rttiapi/v1/buses?apikey=d3oX05CBjgbrmmeUoAzm'
    const proxyurl = 'cors-anywhere.herokuapp.com/'
    return request
    .get('https://' + proxyurl + url)
    .query('d3oX05CBjgbrmmeUoAzm')
    .set('Accept', 'application/json')
    .buffer(true)
    .then(res => res.body)
    .then(json => dispatch(receiveBusses(json)))
    .catch(err => console.log(err))
  }
}

 