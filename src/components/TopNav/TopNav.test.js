import React from 'react';
import '@testing-library/jest-dom';
import TopNav from './TopNav';
import CartContext from '../../CartContext';
import { render,screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

test('render headline for app', () => {
  render(<CartContext.Provider value={[{id:"1",name:"margarita"}]}>
  <Router><TopNav /></Router>
  </CartContext.Provider>)
const linkElement = screen.getByText('Pizza Shop')
  expect(linkElement).toBeInTheDocument();
});

test('renders cart Image', () => {
  const{container}=  render(<CartContext.Provider value={[{id:"1",name:"margarita"}]}>
    <Router><TopNav /></Router>
    </CartContext.Provider>)
  expect(container.getElementsByTagName('img')).toHaveLength(1)
  });
  


/*describe('<TopNav />', () => {
    it('renders two <Link /> ', () => {
      const wrapper = shallow(
        <CartContext.Provider value={[{id:"1",name:"margarita"}]}>
      <TopNav CartContext={CartContext} />
      </CartContext.Provider>);
      console.log(wrapper.debug());
      expect(wrapper.find('.topNav')).to.have.lengthOf(1);
    });
})  */