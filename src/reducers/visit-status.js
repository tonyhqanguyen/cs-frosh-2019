const visitationStatus = (state = false, action) => {
  switch (action.type) {
    case 'SET_TO_VISITED':
      return true;
    default:
      return state;
  }
}

export default visitationStatus;