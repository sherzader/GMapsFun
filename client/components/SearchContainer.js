import { connect } from 'react-redux';
import Search from './Search';

const mapStatetoProps = state => ({
  territories: state.territories
})

const mapDispatchtoProps = dispatch => ({
  addTerritory: (name, id) => dispatch({type: 'ADD_TERRITORY', name, id}),
  removeTerritory: index => dispatch({type: 'REMOVE_TERRITORY', index}),
  markTerritory: (name, mark, index) => dispatch({type: 'TOGGLE_MARK_TERRITORY', name, mark, index})
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Search);
