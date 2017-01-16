//connects state and props to Search
import { connect } from 'react-redux';
import Search from './Search';
import { removeTerritory, toggleMark, markTerritory } from '../actions/territories_actions';

const mapStatetoProps = state => ({
  territories: state.territories
})

const mapDispatchtoProps = dispatch => ({
  markTerritory: (name) => dispatch(markTerritory(name)),
  removeTerritory: index => dispatch(removeTerritory(index)),
  toggleMark: (index, mark) => dispatch(toggleMark(index, mark))
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Search);
