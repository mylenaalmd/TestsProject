import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { Pokemon } from '../components';

describe('Testes do componente Pokemon', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<Pokemon />);

    const namePokemons = screen.getByText('paragraph', { name: /pikachu/i });
    expect(namePokemons).toBeInTheDocument();

    const typePokemons = screen.getByRole('paragraph', { type: /Electric/i });
    expect(typePokemons).toBeInTheDocument();

    const weightPokemons = screen.getByRole('paragraph', /Average weight: 6.0 kg/i);
    expect(weightPokemons).toBeInTheDocument();

    const imagePokemons = screen.getAllByRole('img', { name: /pikachu/i });
    expect(imagePokemons).toBeInTheDocument();
  });

  it(`Teste se o card do pokémon indicado na Pokédex contém um link de navegação
para exibir detalhes deste pokémon. O link deve possuir a URL /pokemons/<id>, onde <id>
é o id do pokémon exibido`, () => {

  });

  it(`Teste se ao clicar no link de navegação do pokémon, é
feito o redirecionamento da aplicação para a página de detalhes de pokémon`, () => {

  });

  it(`Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o
id do pokémon cujos detalhes se deseja ver`, () => {

  });

  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {

  });
});
