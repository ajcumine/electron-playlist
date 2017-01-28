import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../app/components/Home';
import Text from '../../app/components/Text';
import Button from '../../app/components/Button';

describe('Home component', () => {
  const component = shallow(<Home />);

  it('displays the welcome text', () => {
    const text = component.find(Text);
    expect(text).to.have.length(1);
    expect(text.props().text).to.eq('Electron Playlist');
  });

  it('displays the login button', () => {
    const button = component.find(Button);
    expect(button).to.have.length(1);
    expect(button.props().label).to.eq('Login');
  });
});
