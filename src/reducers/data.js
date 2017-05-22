const initialState = {
  isFetching: false,
  data: []
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case 'RECEIVE_DATA':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      });
    default:
      return state;
  }
}

export default dataReducer;
