import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../app/store/configureStore';
import HomePage from '../../app/containers/HomePage';
import Home from '../../app/components/Home';

describe('HomePage container', () => {
  it('renders the home component', () => {
    const store = configureStore();
    const container = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(container.find(Home)).to.have.length(1);
  });
});
