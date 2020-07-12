import { configure, addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import {createRenderer} from 'fela'
import {RendererProvider} from 'react-fela'
import cssReset from '../app/components/cssReset'

// Setup Fela client runtime
const renderer = createRenderer({devMode: true})
cssReset(renderer)
addDecorator((storyFn) => {
  return <RendererProvider renderer={renderer}>{storyFn()}</RendererProvider>
})

addParameters({
  options: {
    showPanel: false
  }
})

configure([
  require.context('../app/components', true, /.stories.js$/)
], module)
