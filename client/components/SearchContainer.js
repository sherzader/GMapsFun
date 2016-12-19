import { connect } from 'react-redux';
import Search from './Search';

const mapStatetoProps = state => ({
  territories: state.territories
})

const mapDispatchtoProps = dispatch => ({
  addTerritory: (name, id) => dispatch({type: 'ADD_TERRITORY', name, id}),
  removeTerritory: index => dispatch({type: 'REMOVE_TERRITORY', index}),
  markTerritory: (index, mark) => dispatch({type: 'TOGGLE_MARK_TERRITORY', index, mark})
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Search);
