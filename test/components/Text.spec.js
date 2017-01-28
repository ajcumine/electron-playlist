import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Text from '../../app/components/Text';

describe('Text component', () => {
  it('displays the text from the text props', () => {
    const component = shallow(<Text text={'this is some test text'} />);
    expect(component.text()).to.eq('this is some test text');
  });
});
