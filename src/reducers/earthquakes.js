const initialState = {
  isFetching: false,
  earthquakes: [],
  selectedEarthquake: {}
};

function earthquakesReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_EARTHQUAKES':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_EARTHQUAKES':
      return Object.assign({}, state, {
        isFetching: false,
        earthquakes: action.data.features
      });
    case 'SELECT_EARTHQUAKE':
      return Object.assign({}, state, {
        selectedEarthquake: action.earthquake
      });
    default:
      return state;
  }
}

export default earthquakesReducer;
