import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'components/Navbar'
import AppComponent from 'grommet/components/App'
import AppFooter from 'components/AppFooter'
import Sidebar from 'grommet/components/Sidebar'
import Split from 'grommet/components/Split'

import 'styles/core.scss'

export default function App (props) {
  return (
    <AppComponent centered={false} lang="en-US">
      <Split fixed={false}
        flex='left'
        priority='right'
        separator={false}>
        <div style={{'maxWidth': '100%'}}>
          <Navbar />
          <main id="content">
            {React.cloneElement(props.children, props)}
          </main>
          <AppFooter />
        </div>

      </Split>
    </AppComponent>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}
