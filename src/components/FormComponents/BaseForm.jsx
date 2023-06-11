import React, { Component } from 'react'
import Agent from '../Steps/Agent';
import Customer from '../Steps/Customer';

export class BaseForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    crisId: '',
    csr: '',
    btn: '',
    cbr: '',
    order: '',
    data: '',
    video: '',
    voice: '',
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { 
      firstName,
      lastName,
      email,
      crisId,
      csr,
      btn,
      cbr,
      order,
      data,
      video,
      voice
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      crisId,
      csr,
      btn,
      cbr,
      order,
      data,
      video,
      voice
    }

    switch(step) {
      case 1: {
        return (
          <Agent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      };
      case 2: {
        return (
          <Customer
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      };
      case 3: {
        return (
          <Success
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      };
    }
  }
};

export default BaseForm;