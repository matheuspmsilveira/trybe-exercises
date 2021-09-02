import { Component } from 'react';
import data from '../../data';
import { Container } from './style';

const pokemons = data.map(({ id, name, type, averageWeight, image }) => {
  return (
    <Container>
      <div key={id}>
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>
          Average weight: {averageWeight.value} {averageWeight.measurementUnit}
        </p>
      </div>
      <div>
        <img src={image} alt='Foto do pokemon' />
      </div>
    </Container>
  );
});

class Pokemon extends Component {
  render() {
    return <>{pokemons}</>;
  }
}

export default Pokemon;
