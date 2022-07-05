import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pokedex } from '../pages';
import renderWithRouter from './renderWithRouter';
import data from '../data';
import App from '../App';

const isPokemon = {
  4: false,
  10: false,
  23: false,
  25: true,
  65: false,
  78: false,
  143: false,
  148: false,
  151: false,
};

describe('Testes do componente Pokedex', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<Pokedex pokemons={ data } isPokemonFavoriteById={ isPokemon } />);

    const headingPokedex = screen.getByRole('heading',
      { name: /Encountered pokémons/i, level: 2 });
    expect(headingPokedex).toBeInTheDocument();
  });

  it(`Teste se é exibido o próximo pokémon da lista quando o botão Proximo pokemon
   é clicado`, () => {
    renderWithRouter(<App />);
    data.forEach((item, index) => {
      const nomePokemon = item.name;
      const firstPokemon = screen.getByText(nomePokemon);
      expect(firstPokemon).toBeInTheDocument();
      const buttonPokedex = screen.getByRole('button', { name: /Próximo pokémon/i });
      userEvent.click(buttonPokedex);
      if (index === data.length - 1) {
        const reset = screen.getByText(/pikachu/i);
        expect(reset).toBeInTheDocument();
      }
    });
  });

  it('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);

    const numberPokemons = screen.getAllByRole('img', { name: /pikachu/i });
    expect(numberPokemons).toHaveLength(1);
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    screen.getAllByTestId('pokemon-type-button').forEach(
      (item) => expect(item).toBeInTheDocument(),
    );
    expect(screen.getByRole('button', { name: /Electric/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Poison/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Psychic/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Dragon/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Bug/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Normal/i })).toBeVisible();

    const btnTypeFire = screen.getByRole('button', { name: /Fire/i });
    userEvent.click(btnTypeFire);
    expect(screen.getByText(/Charmander/i)).toBeInTheDocument();
    expect(screen.queryByText(/Pikachu/i)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /All/i })).toBeVisible();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<Pokedex pokemons={ data } isPokemonFavoriteById={ isPokemon } />);

    const buttonNext = screen.getByRole('button', { name: /próximo pokémon/i });
    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);
    data.forEach((pokemon) => {
      const pokemonAtual = screen.getByTestId('pokemon-name');
      expect(pokemonAtual).toHaveTextContent(pokemon.name);
      userEvent.click(buttonNext);
    });
  });
});
