import React, { Component } from 'react';

import PropTypes from 'prop-types';
import style from './contactForm.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/phoneBookAction';

class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
  };
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  submitContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={style.formWrapper}>
        <form onSubmit={this.submitContact}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={style.label}>
            Number
            <input
              className={style.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <button className={style.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
