const TerritoriesReducer = function (state = [ {name:'park1', id: 1, marked: true}, {name: 'park2', id: 2, marked: false}], action) {
  switch(action.type){
    case 'ADD_TERRITORY':
      return [ ...state, {name: action.name, id: action.id, marked: false} ];
      break;
    default:
      return state;
      break;
  }
}

export default TerritoriesReducer;
