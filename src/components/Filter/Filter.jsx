import style from './filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selector from '../../redux/phoneBookSelectors';
import actions from '../../redux/phoneBookAction';

const Filter = ({ value, onChange }) => (
  <label className={style.filter}>
    Find contacts by name:
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: selector.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
