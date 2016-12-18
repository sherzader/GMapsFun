const TerritoriesReducer = function (state = [], action) {
  switch(action.type){
    case 'ADD_TERRITORY':
      return [ ...state, {name: action.name, marked: false} ];
      break;
    case 'TOGGLE_MARK_TERRITORY':
      let mark = (action.mark === 'paw-print-marked');
      return [ ...state.slice(0, action.index), { name: action.name, marked: mark }, ...state.slice(action.index + 1) ];
      break;
    case 'REMOVE_TERRITORY':
      return [ ...state.slice(0, action.index), ...state.slice(action.index + 1) ];
      break;
    case 'ADD_AND_MARK':
      return [ ...state, {name: action.name, marked: true}];
      break;
    default:
      return state;
      break;
  }
}

export default TerritoriesReducer;
