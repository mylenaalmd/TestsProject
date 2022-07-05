// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './renderWithRouter';
// import App from '../App';
// import { Pokemon } from '../components';

// const linkDetails = 'http://localhost:3000/pokemons/25';

// const { history } = renderWithRouter(<App />);
// const globalHistory = history;

// describe('Testes do componente Pokemon', () => {
//   it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
//     renderWithRouter(<App />);
//     const namePokemons = screen.getByTestId('pokemon-name');
//     const typePokemons = screen.getByTestId('pokemen-type');
//     const weightPokemons = screen.getByTestId('pokemon-weight');
//     const imagePokemons = screen.getByAltText('Pikachu-sprite');
//     expect(namePokemons).toHaveTextContent('Pikachu');
//     expect(typePokemons).toHaveTextContent('Electric');
//     expect(weightPokemons).toHaveTextContent('Average weight: 6.0 kg');
//     expect(imagePokemons).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/…ter/sprites/pokemon/other/official-artwork/25.png');
//   });

//   it(`Teste se o card do pokémon indicado na Pokédex contém um link de navegação
// para exibir detalhes deste pokémon. O link deve possuir a URL /pokemons/<id>, onde <id>
// é o id do pokémon exibido`, () => {
//     renderWithRouter(<App />);
//     const linkCard = screen.getByRole('link', { name: /More details/i });
//     expect(linkCard).toHaveAttribute('href', linkDetails);
//     expect(linkCard).toBeInTheDocument();
//   });

//   it(`Teste se ao clicar no link de navegação do pokémon, é
// feito o redirecionamento da aplicação para a página de detalhes de pokémon`, () => {
//     renderWithRouter(<App />);
//     const redirectClick = screen.getByRole('link', { name: /More details/i });
//     userEvent.click(redirectClick);
//     const heading = screen.getByRole('heading', { name: /Summary/i, level: 2 });
//     expect(heading).toBeInTheDocument();
//   });

//   it(`Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o
// id do pokémon cujos detalhes se deseja ver`, () => {
//     renderWithRouter(<App />);
//     globalHistory.push(linkDetails);
//     expect(globalHistory.location.pathname).toBe(linkDetails);
//   });

//   it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
//     renderWithRouter(<App />);
//     const details = screen.getByRole('Link', { name: /More details/i });
//     userEvent.click(details);
//     const favoriteSection = screen.getByRole('checkbox', { name: /Pokémon favoritado/i });
//     userEvent.click(favoriteSection);
//     const favoritePokemon = screen.getByRole('img',
//       { name: 'Pikachu is marked as favorite' });
//     expect(favoritePokemon).toBeInTheDocument();
//   });
// });
