import { Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import ContactNew from './components/ContactNew';

//import ContactItem from './components/ContactItem';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: 1921, //nobel prize
          name: 'Albert Einstein',
          email: 'emc.deux@aol.com',
          telephone: '123-456-7890',
          imgSrc:
            'https://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/Albert-Einstein-quotes-Genius1-1068x561.jpg',
        },
        {
          id: 3948, //asteroid
          name: 'Niels Bohr',
          email: 'atomic.og@quantum.com',
          telephone: '987-654-3210',
          imgSrc: 'https://i.pinimg.com/originals/c2/21/c0/c221c028394f57279cf4279d4139d61d.png',
        },
        {
          id: 1010,
          name: 'Ryan Gosling',
          email: 'baby.goose@hotmail.com',
          telephone: '919-867-5309',
          imgSrc:
            'https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/31/movies_ryan-gosling-feminist.jpg',
        },
      ],
    };

    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    console.log('addingContact!')
    this.setState({ contacts: this.state.contacts.concat([contact]) });
  }

  // editContact() {
  //   console.log(`edit contact from app`);
  // }

  // deleteContact() {
    // console.log('delete from app');
    // this.setState({
    //   contacts: [...this.state.contacts.filter((c) => c.id !== id)],
    //});
  // }

  render() {
    return (
      <div className='App container'>
        <div className='row'>
          <div className='col-md-3 offset-md-3'>
            <h1 style={{ display: 'inline-block' }}>Contacts</h1>
          </div>
          <Link className='add-contact-link' to={`/contacts/new`}>
            Add Another Contact
          </Link>
        </div>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Contacts
                addContact={this.addContact}
                editContact={this.editContact}
                deleteContact={this.deleteContact}
                contacts={this.state.contacts}
              />
            )}
          />
          
          <Route
            path='/contacts'
            render={() => (
              <Contacts
                addContact={this.addContact}
                editContact={this.editContact}
                deleteContact={this.deleteContact}
                contacts={this.state.contacts}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
