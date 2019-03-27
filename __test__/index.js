import test from 'ava'
import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReadingProgress from '../src/js/lib'

import browserEnv from 'browser-env'
browserEnv()

Enzyme.configure({ adapter: new Adapter() })

test('renders expected HTML tag', (t) => {
  const component = shallow(
    <ReadingProgress targetEl="js-article" className="test-class" />
  )

  t.is(component.render()['0'].name, 'progress')
  t.true(component.hasClass('test-class'))
})
