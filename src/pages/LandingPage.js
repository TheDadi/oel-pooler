import React, { Component } from 'react'

import LandingContainer from 'containers/Landing/LandingContainer'

import AppFooter from 'components/AppFooter'

import { updatePageTitle } from 'utils/a11y'

export default class LandingPage extends Component {
  componentDidMount() {
    updatePageTitle('Home Page')
  }
  render() {
    return (
      <div className={'app__landing'}>
        <LandingContainer />
      </div>
    )
  }
}
