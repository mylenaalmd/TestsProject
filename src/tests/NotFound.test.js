import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from './renderWithRouter';

describe('testes do componete Not Found', () => {
  it('Teste se a página contém um heading h2 com o texto Page requested not found 😭',
    () => {
      renderWithRouter(<NotFound />);

      const msgNotFound = screen.getByRole('heading',
        { name: /Page requested not found/i, level: 2 });
      expect(msgNotFound).toBeInTheDocument();
    });
  it('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);

    const imgNotFound = screen.getByRole('img', { name: /Pikachu crying/i });
    expect(imgNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
