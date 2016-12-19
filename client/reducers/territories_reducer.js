const TerritoriesReducer = function (state = [ {name:'park1', marked: true}, {name: 'park2', marked: false}], action) {
  switch(action.type){
    case 'ADD_TERRITORY':
      return [ ...state, {name: action.name, marked: false} ];
      break;
    case 'TOGGLE_MARK':
      return state.map((territory, i) => {
        if (action.index === i){
          return Object.assign({}, territory,
            {marked: !action.mark}
          );
        }
        return territory;
      });
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
