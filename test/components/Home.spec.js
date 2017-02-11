import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../app/components/Home';
import Text from '../../app/components/Text';
import Button from '../../app/components/Button';

describe('Home component', () => {
  const component = shallow(<Home />);

  it('displays the welcome text', () => {
    const welcomeText = component.find({ text: 'Electron Playlist' });
    expect(welcomeText).to.have.length(1);
    expect(welcomeText.is(Text)).to.eq(true);
  });

  it('displays the login button', () => {
    const button = component.find({ label: 'Login' });
    expect(button).to.have.length(1);
    expect(button.is(Button)).to.eq(true);
  });

  it('displays the logout button', () => {
    const button = component.find({ label: 'Logout' });
    expect(button).to.have.length(1);
    expect(button.is(Button)).to.eq(true);
  });
});
