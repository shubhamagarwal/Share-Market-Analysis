import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Currencytabs from './Tabs';

const setup = propOverrides => {
    const props = Object.assign(
      {
        currency: 0,
        setCurrency: ()=> {}
      },
      propOverrides
    )
    const wrapper = mount(<Currencytabs {...props} />)
    return wrapper
  }

describe('Tabs component', () => {
    it('section class should exist', () => {
        const wrapper = setup()
        expect(wrapper.props().currency).to.equal(0)
    })
})