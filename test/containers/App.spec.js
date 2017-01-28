import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../app/containers/App';
import HomePage from '../../app/containers/HomePage';

describe('App container', () => {
  it('renders the containers passed to it as children', () => {
    const appWrapper = shallow(<App><HomePage /></App>);
    expect(appWrapper.find(HomePage)).to.have.length(1);
  });
});
