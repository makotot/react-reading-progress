import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import ReadingProgress from '../src/js/lib'

import browserEnv from 'browser-env'
browserEnv()

test('renders expected HTML tag', (t) => {
  const component = shallow(
    <ReadingProgress targetEl="js-article" className="test-class" />
  ).dive().dive()

  t.is(component.type(), 'progress')
  t.true(component.hasClass('test-class'))
})
