import { connect } from 'react-redux';
import Search from './Search';

const mapStatetoProps = state => ({
  territories: state.territories
})

const mapDispatchtoProps = dispatch => ({
  addTerritory: dispatch => ({type: 'ADD_TERRITORY', territory}),
  removeTerritory: dispatch => ({type: 'REMOVE_TERRITORY', territory}),
  markTerritory: dispatch => ({type: 'MARK_TERRITORY', territory})
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Search);
