import React from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title'
import Logo from 'components/Logo/Logo'
import NavControl from 'components/NavControl/NavControl'

export default function AppHeader () {
  return (
    <Header justify='center' colorIndex='light-1'>
      <Box size={{width: {max: 'xxlarge'}}} direction='row'
           responsive={false} justify='between' align='center'
           pad={{horizontal: 'medium'}} flex='grow'>
        <Box direction='row'>
          <Logo/>
          <Title>Oel Pooler</Title>
        </Box>
        <NavControl />
      </Box>
    </Header>
  );
};
