import { connect } from 'react-redux';
import Search from './Search';

const mapStatetoProps = state => ({
  territories: state.territories
})

const mapDispatchtoProps = dispatch => ({
  addTerritory: (name, id) => dispatch({type: 'ADD_TERRITORY', name, id}),
  removeTerritory: name => dispatch({type: 'REMOVE_TERRITORY', name}),
  markTerritory: name => dispatch({type: 'MARK_TERRITORY', name})
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Search);
