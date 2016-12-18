const TerritoriesReducer = function (state = [ {name:'park1', marked: true}, {name: 'park2', marked: false}], action) {
  switch(action.type){
    case 'ADD_TERRITORY':
      return [ ...state, {name: action.name, marked: false} ];
      break;
    case 'TOGGLE_MARK_TERRITORY':
      return [ ...state.slice(0, action.index), { name: action.name, marked: !action.mark }, ...state.slice(action.index + 1) ];
      break;
    case 'REMOVE_TERRITORY':
      return [ ...state.slice(0, action.index), ...state.slice(action.index + 1) ];
      break;
    default:
      return state;
      break;
  }
}

export default TerritoriesReducer;
