import React from 'react';
import '@testing-library/jest-dom';
import PizzaItem from './PizzaItem';
import CartContext from '../../CartContext';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

test('render pizza image', () => {
    const{container}=  render(<CartContext.Provider value={[{id:"1",name:"margarita"}]}>
  <Router><PizzaItem /></Router>
  </CartContext.Provider>)
  expect(container.getElementsByTagName('img')).toHaveLength(1)
});

test('render pizza name', () => {
    const{container}=  render(<CartContext.Provider value={[{id:"1",name:"margarita"}]}>
  <Router><PizzaItem /></Router>
  </CartContext.Provider>)
    expect(container.querySelector('.title')).not.toBe(null)
   });

   test('render pizza description', () => {
    const{container}=  render(<CartContext.Provider value={[{id:"1",name:"margarita"}]}>
  <Router><PizzaItem /></Router>
  </CartContext.Provider>)
    expect(container.querySelector('.description')).not.toBe(null)
   });

   test('render pizza price', () => {
    const{container}=  render(<CartContext.Provider value={[{id:"1",name:"margarita"}]}>
  <Router><PizzaItem /></Router>
  </CartContext.Provider>)
    expect(container.querySelector('.price')).not.toBe(null)
   });