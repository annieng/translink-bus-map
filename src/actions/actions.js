import * as types from './actionTypes'

const request = require('superagent')

export function receiveBusses(json) {
  return {type: types.RECEIVE_BUSSES, busses: json}
}

export function fetchBusses() {
  return dispatch => {
  return request
  // .get
  .get('http://api.translink.ca/rttiapi/v1/buses?apikey=d3oX05CBjgbrmmeUoAzm')
  .query('d3oX05CBjgbrmmeUoAzm')
  // .set
  .set('Accept', 'application/json')
  .then(res => res.body)
  .then(json => dispatch(receiveBusses(json)))
  .catch(err => console.log(err))
  }
}