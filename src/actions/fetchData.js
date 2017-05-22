import fetch from 'isomorphic-fetch';

const URL = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson`;

export const REQUEST_DATA = 'REQUEST_DATA';
function requestData(data) {
  return {
    type: REQUEST_DATA,
    data
  }
}

export const RECEIVE_DATA = 'RECEIVE_DATA';
function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data,
    receivedAt: Date.now()
  }
}

export function fetchData() {
  return function (dispatch) {
    dispatch(requestData())
    return fetch(URL)
     .then(response => response.json())
     .then(json => dispatch(receiveData(json)))
     .catch(error => console.log(error));
  }
};
