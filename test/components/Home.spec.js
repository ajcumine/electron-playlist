import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../app/components/Home';

describe('Home component', () => {
  it('displays the home component welcome text', () => {
    const component = shallow(<Home />);
    expect(component.text()).to.eq('Electron Playlist');
  });
});
