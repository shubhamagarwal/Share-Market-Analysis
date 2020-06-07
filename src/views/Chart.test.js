import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Chart from './Chart';

const wrapper = shallow(<Chart />)

describe('Chart component', () => {
    it('section class should exist', () => {
        expect(wrapper.find('.main-content').exists()).to.equal(true)
    })

    it('Should have portfolio heading', () => {
        const text = wrapper.find('.portfolio-heading').text()
        expect(text).to.have.string('Portfolio benchmark')
    })
})