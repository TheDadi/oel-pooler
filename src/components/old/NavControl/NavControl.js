import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navActivate } from 'actions/actions';
import Button from 'grommet/components/Button';
import MenuIcon from 'grommet/components/icons/base/Menu'

class NavControl extends Component {
  render () {
    const { instanceName, nav: { active }, title } = this.props;

    let result;
    if (! active) {
      let label;
      if (title) {
        label = instanceName;
      }
      result = (
        <Button onClick={() => this.props.dispatch(navActivate(true))}>
          <MenuIcon size={'medium'} />
          {label}
        </Button>
      );
    } else {
      result = null;
    }
    return result;
  }
};

NavControl.propTypes = {
  instanceName: PropTypes.string,
  nav: PropTypes.object,
  title: PropTypes.bool
};

let select = (state, props) => ({
  instanceName: 'Oel Pooler',
  nav: state.nav
});

export default connect(select)(NavControl);
