import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../app/containers/HomePage';
import Home from '../../app/components/Home';

describe('HomePage container', () => {
  it('renders the home component', () => {
    const container = shallow(<HomePage />);
    expect(container.find(Home)).to.have.length(1);
  });
});
