//connects state and props to Search
import { connect } from 'react-redux';
import Search from './Search';
import { addTerritory, removeTerritory, toggleMark, addAndMark } from '../actions/territories_actions';

const mapStatetoProps = state => ({
  territories: state.territories
})

const mapDispatchtoProps = dispatch => ({
  addTerritory: (name) => dispatch(addTerritory(name)),
  addAndMark: (name) => dispatch(addAndMark(name)),
  removeTerritory: index => dispatch(removeTerritory(index)),
  toggleMark: (index, mark) => dispatch(toggleMark(index, mark))
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Search);
