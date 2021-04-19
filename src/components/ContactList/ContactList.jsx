import style from './contactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/phoneBookAction';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.contactList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li className={style.item} key={id}>
          {name}: {number}
          <button className={style.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizedFilter) ||
      number.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
