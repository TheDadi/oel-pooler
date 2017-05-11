import React, { Component } from 'react';
import { updatePageTitle } from 'utils/a11y';

export default class AboutPage extends Component {
  componentDidMount() {
    updatePageTitle('Compare Page');
  }
  render() {
    return (
      <div className={'app__compare'}>
        <div>Compare</div>
      </div>
    );
  }
}
