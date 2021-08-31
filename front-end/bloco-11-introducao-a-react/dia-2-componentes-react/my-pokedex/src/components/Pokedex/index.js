import { Component } from 'react';
import Pokemon from '../Pokemon';
import { Container } from './style';

class Pokedex extends Component {
  render() {
    return (
      <Container>
        <Pokemon />
      </Container>
    );
  }
}

export default Pokedex;
