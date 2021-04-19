import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
