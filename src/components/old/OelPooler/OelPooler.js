import React, {Component} from 'react';
import {connect} from 'react-redux';
import {navResponsive} from 'actions/actions';
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import NavSidebar from 'components/NavSidebar/NavSidebar';
import AppHeader from 'components/AppHeader/AppHeader'
import AppFooter from 'components/AppFooter/AppFooter'

class OelPooler extends Component {

  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
  }

  _onResponsive(responsive) {
    this.props.dispatch(navResponsive(responsive));
  }

  render() {
    console.log(this.props)
    const {
      nav: {
        active: navActive,
        enabled: navEnabled,
        responsive
      }
    } = this.props;

    const includeNav = (navActive && navEnabled);

    let nav;
    if (includeNav) {
      nav = <NavSidebar />;
    }

    const priority = (includeNav && 'single' === responsive ? 'left' : 'right');

    return (
      <App centered={false}>
        <Split priority={priority} flex="right"
               onResponsive={this._onResponsive}>
          {nav}
          <div>
            <AppHeader />
            {this.props.children}
            <AppFooter />
          </div>
        </Split>
      </App>
    );
  }
}

let select = (state) => ({
  nav: state.nav
});

export default connect(select)(OelPooler);
