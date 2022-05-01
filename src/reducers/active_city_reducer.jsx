const activeCityReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  if (action.type === 'SET_ACTIVE_CITY') {
    return action.payload;
  } else {
    return state;
  }
};

export default activeCityReducer;
