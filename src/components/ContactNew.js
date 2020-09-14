import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ContactNew extends Component {
  //this.props.contacts, this.props.addContact, this.props.history were passed by the Router

  constructor() {
    super();

    this.state = {
      id: Math.round(Math.random() * 10000),
      name: '',
      email: '',
      telephone: '',
      imgSrc: '',
    };

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);
  }

  handleSubmitContactClick() {
    console.log('clicked!');
    if (!document.getElementById("inputName").value || !document.getElementById("inputEmail").value || !document.getElementById("inputTelephone").value || !document.getElementById("inputImage").value) {
      alert("Please complete all contact entry fields. Include a placeholder value if necessary");
    } else {
      const newContact = {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        telephone: this.state.telephone,
        imgSrc: this.state.imgSrc,
      };

      this.props.addContact(newContact);
      this.props.history.push('/contacts');
    }
  }


  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-1'>
            <div className='row back-clicker'></div>
            <Link className='back-text' to='/contacts'>Back</Link>
          </div>
          <h5 className='new-contact-details'>New Contact</h5>
          <br />
        </div>
        <form className='add-contact-form'>
          <div className='form-group row'>
            <label htmlFor='inputName' className='col-sm-2 col-form-label'>
              Name
            </label>
            <div className='col-sm-6'>
              <input
                type='text'
                className='form-control'
                id='inputName'
                placeholder='Name'
                required
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='inputEmail' className='col-sm-2 col-form-label'>
              Email
            </label>
            <div className='col-sm-6'>
              <input
                type='email'
                className='form-control'
                id='inputEmail'
                placeholder='Email address'
                required
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='inputTelephone' className='col-sm-2 col-form-label'>
              Phone
            </label>
            <div className='col-sm-6'>
              <input
                type='tel'
                className='form-control'
                id='inputTelephone'
                placeholder="1234567890"
                required
                onChange={(event) =>
                  this.setState({ telephone: event.target.value })
                }
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='inputImage' className='col-sm-2 col-form-label'>
              Image
            </label>
            <div className='col-sm-6'>
              <input
                type='url'
                className='form-control'
                id='inputImage'
                placeholder='Link to an image (https://...)'
                required
                onChange={(event) =>
                  this.setState({ imgSrc: event.target.value })
                }
              />
            </div>
          </div>         
        </form>
        <br />
        <br />
        <br />
        <div className='row'>
          <button type='button' onClick={this.handleSubmitContactClick}>
            Submit
          </button>
        </div>
        <br />
      </div>
    );
  }
}

export default ContactNew;
