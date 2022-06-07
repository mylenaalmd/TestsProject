import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from './renderWithRouter';

describe('testes do componete Favorite Pokemons', () => {
  it('Teste se é exibida na tela a mensagem caso a pessoa não tenha pokémons favoritos',
    () => {
      renderWithRouter(<FavoritePokemons />);

      const msgPokemons = screen.getByRole('', { name: /No favorite pokemon found/i });
      expect(msgPokemons).toBeInTheDocument();
    });
  it('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<FavoritePokemons />);
  });
});
