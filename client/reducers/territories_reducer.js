const TerritoriesReducer = (state = [], action) => {
  const place = action.place;
  const index = state.territories ? state.territories.indexOf(place) : 0;
  switch(action.type) {
    case 'UNMARK_TERRITORY':
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
      break;
    case 'MARK_TERRITORY':
      return [...state, place];
      break;
    default:
      return state;
      break;
  }
}

export default TerritoriesReducer;
