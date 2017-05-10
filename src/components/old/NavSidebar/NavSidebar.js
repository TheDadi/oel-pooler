import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navActivate } from 'actions/actions';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Anchor from 'grommet/components/Anchor';
import Logo from 'components/Logo/Logo'

class NavSidebar extends Component {

  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this.props.dispatch(navActivate(false));
  }

  render() {
    const { nav: { items }, instanceName } = this.props;
    var links = items.map((page) => {
      return (
        <Anchor key={page.label} path={page.path} label={page.label} />
      );
    });

    return (
      <Sidebar colorIndex="neutral-1" fixed={true}>
        <Header size="large" justify="between" pad={{horizontal: 'medium'}}>
          <Title onClick={this._onClose} a11yTitle="Close Menu">
            <Logo colorIndex='light-1' />
            {instanceName}
          </Title>
          <Button icon={<CloseIcon />} onClick={this._onClose} plain={true}
                  a11yTitle="Close Menu" />
        </Header>
        <Menu fill={true} primary={true}>
          {links}
        </Menu>
        <Footer pad={{horizontal: 'medium', vertical: 'small'}}>
        </Footer>
      </Sidebar>
    );
  }

}

NavSidebar.propTypes = {
  nav: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string
    }))
  }),
  onClose: PropTypes.func,
  productName: PropTypes.string,
  router: PropTypes.object
};

let select = (state) => ({
  instanceName: 'Oel Pooler',
  nav: state.nav
});

export default connect(select)(NavSidebar);
