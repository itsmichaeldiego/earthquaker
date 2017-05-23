const initialState = {
  isFetching: false,
  earthquakes: []
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
    default:
      return state;
  }
}

export default earthquakesReducer;
