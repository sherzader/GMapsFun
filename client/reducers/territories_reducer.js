const TerritoriesReducer = function (state = {'park1': true, 'park2': false, 'park3': false, 'park4': true}, action) {
  switch(action.type){
    default:
      return state;
      break;
  }
}

export default TerritoriesReducer;
