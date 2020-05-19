import React from 'react';
import '@testing-library/jest-dom';
import PizzaList from './PizzaList';
import { render } from '@testing-library/react';

test('render container class', () => {
   const{container}= render(<PizzaList></PizzaList>)
   expect(container.querySelector('.container')).not.toBe(null)
  });
  