import cities from '../cities';

const citiesReducer = (state = cities, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  if (action.type === 'SET_CITIES') {
    return action.payload;
  } else {
    return state;
  }
};

export default citiesReducer;
