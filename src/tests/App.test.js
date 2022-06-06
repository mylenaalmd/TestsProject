import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação',
  () => {
    it('deve renderizar o componente App', () => {
      const { history } = renderWithRouter(<App />);

      const { pathname } = history.location;
      expect(pathname).toBe('/');

      const linkHome = screen.getByRole('link', { name: 'Home' });
      expect(linkHome).toBeInTheDocument();
      userEvent.click(linkHome);
    });

    it('deve renderizar o componente Sobre', () => {
      renderWithRouter(<App />);

      // const { pathname } = history.location;
      // expect(pathname).toBe('/about');

      const linkAbout = screen.getByRole('link', { name: 'About' });
      expect(linkAbout).toBeInTheDocument();
      userEvent.click(linkAbout);
    });

    it('deve renderizar o componente favorite Pokemons', () => {
      renderWithRouter(<App />);

      // const { pathname } = history.location;
      // expect(pathname).toBe('/favorites');

      const linkFavotitesPok = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(linkFavotitesPok).toBeInTheDocument();
      userEvent.click(linkFavotitesPok);
    });

    it('Teste se a aplicação é redirecionada para a página Not Found ', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/pagina/que-nao-existe/');

      const notFoundImg = screen.getByRole('img',
        { name: /Pikachu crying/i });
      expect(notFoundImg).toBeInTheDocument();
    });
  });
