import React, { Component } from 'react';
import { updatePageTitle } from 'utils/a11y';

export default class AboutPage extends Component {
  componentDidMount() {
    updatePageTitle('About Page');
  }
  render() {
    return (
      <div className={'app__about'}>
        <div>About</div>
      </div>
    );
  }
}
