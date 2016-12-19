import { connect } from 'react-redux';
import Search from './Search';
import { addTerritory, removeTerritory, toggleMark } from '../actions/territories_actions';

const mapStatetoProps = state => ({
  territories: state.territories
})

const mapDispatchtoProps = dispatch => ({
  addTerritory: (name, id) => dispatch(addTerritory(name, id)),
  removeTerritory: index => dispatch(removeTerritory(index)),
  markTerritory: (index, mark) => dispatch(toggleMark(index, mark))
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Search);
