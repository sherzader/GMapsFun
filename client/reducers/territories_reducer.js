const TerritoriesReducer = (state = [], action) => {
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
      return [ ...state.slice(0, action.index),
        ...state.slice(action.index + 1) ];
      break;
    case 'MARK_TERRITORY':
      return [ ...state, {name: action.name, id: action.id}];
      break;
    default:
      return state;
      break;
  }
}

export default TerritoriesReducer;
