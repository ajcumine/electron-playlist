import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../app/components/Button';

describe('Button component', () => {
  it('displays a button with a label from the label prop', () => {
    const component = shallow(<Button label={'this is the button label'} />);
    expect(component.text()).to.eq('this is the button label');
  });
});
