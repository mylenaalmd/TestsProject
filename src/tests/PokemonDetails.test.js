import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste do componente Pokemon Details', () => {
  it('Teste se as informações detalhadas do pokémon selecionado são mostradas na tela',
    () => {
      renderWithRouter(<App />);
      userEvent.click(screen.getByText(/More Details/i));
      const namePokemon = screen.getByText(/Pikachu Details/i);
      expect(namePokemon).toBeInTheDocument();

      const linkDetails = screen.queryByText(/More details/i);
      expect(linkDetails).not.toBeInTheDocument();

      const titleSummary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
      expect(titleSummary).toBeInTheDocument();

      expect(screen.getByText(/This intelligent Pokémon/i)).toBeInTheDocument();
    });

  it(`Teste se existe na página uma seção com os mapas contendo as
   localizações do pokémon`, () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByText(/More Details/i));
    const h2Pokemon = screen.getByRole('heading',
      { name: /Game Locations of Pikachu/i, level: 2 });
    expect(h2Pokemon).toBeInTheDocument();

    const localização1 = screen.getByText(/Kanto Viridian Forest/i);
    const localização2 = screen.getByText(/Kanto Power Plant/i);
    expect(localização1).toBeInTheDocument();
    expect(localização2).toBeInTheDocument();

    const imagemPokemons = screen.getAllByRole('img');
    expect(imagemPokemons[1]).toHaveAttribute('src', 'https://pwo-wiki.info/images/4/47/Viridian_Forest.gif');
    expect(imagemPokemons[1]).toHaveAttribute('alt', 'Pikachu location');
    expect(imagemPokemons[2]).toHaveAttribute('src', 'https://pwo-wiki.info/images/5/5b/Pp.gif');
    expect(imagemPokemons[2]).toHaveAttribute('alt', 'Pikachu location');
  });
  it(`Teste se o usuário pode favoritar um pokémon através 
  da página de detalhes`, () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByText(/More Details/i));

    const checkboxFavoritePokemon = screen.getByRole('checkbox');
    userEvent.click(checkboxFavoritePokemon);

    const labelCheckbox = screen.getByLabelText('Pokémon favoritado?');
    expect(labelCheckbox).toBeChecked();
    userEvent.click(labelCheckbox);
    expect(labelCheckbox).not.toBeChecked();
  });
});
