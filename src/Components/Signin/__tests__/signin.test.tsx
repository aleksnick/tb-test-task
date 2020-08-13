import React from 'react';
import Signin from '..';
import {mount} from 'enzyme';

describe('Signin component', () => {
  test('Form submit', () => {
    let submit = false;
    const onSubmit = () => {
      submit = true;
    };

    const wrapper = mount(<Signin onSubmit={onSubmit} />);
    wrapper.find('form').simulate('submit');

    expect(submit).toBeTruthy();
  });

  test('Button submit', () => {
    let submit = false;
    const onSubmit = () => {
      submit = true;
    };

    const wrapper = mount(<Signin onSubmit={onSubmit} />);
    wrapper.find('button').simulate('submit');

    expect(submit).toBeTruthy();
  });
});
