import React, { Component } from 'react';
import { updatePageTitle } from 'utils/a11y';
import CompareContainer from 'containers/Compare/CompareContainer'

export default class AboutPage extends Component {
  componentDidMount() {
    updatePageTitle('Compare Page');
  }
  render() {
    return (
      <div className={'app__compare'}>
        <CompareContainer />
      </div>
    );
  }
}
