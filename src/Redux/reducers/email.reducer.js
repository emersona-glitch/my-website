const confirmation = (state = 'idle', action) => {
  switch (action.type) {
      case 'SET_CONFIRMATION':
        return action.payload
      default:
        return state;
  }
};

export default confirmation;
