import React, { Component } from 'react';
import PokemonForm from 'components/PokemonForm';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}
