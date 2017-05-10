import React from 'react'
import PropTypes from 'prop-types'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Heading from 'grommet/components/Heading'
import AppLogo from 'components/AppLogo'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <Header justify='between' className={'navbar'} colorIndex={'brand'}>
      <Title>
        <Link to='/'>
          <AppLogo className={'navbar__logo'}/>
        </Link>
        Oel Pooler
      </Title>
      <Menu
        className={'navbar__menu'}
        direction='row'
        align='center'
        responsive={false}>
        <a
          className='grommetux-anchor'
          href='/'
          aria-label='Navigate to Home Page'>
          Startseite
        </a>
        <a
          className='grommetux-anchor'
          href='/about'
          aria-label='Navigate to About Page'>
          Über uns
        </a>
      </Menu>
    </Header>
  )
}
