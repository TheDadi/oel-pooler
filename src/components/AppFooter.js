import React from 'react'
import classnames from 'classnames'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import SocialShare from 'grommet/components/SocialShare'

export default function AppFooter () {
  return(
  <Footer>
    <Box direction='row'
      justify='between'
      align='center'
      responsive={false}
      pad={"medium"} colorIndex={'light-2'} full='horizontal'>
      <Paragraph margin='none'>
        © 2016 Oel Pooler
      </Paragraph>
      <Box direction={'row'}
        responsive={false}>
        <SocialShare
          a11yTitle='Go to Facebook to Share this website'
          type='facebook'
          link=''
          text='OelPooler'
        />
        <SocialShare
          a11yTitle='Go to Twitter to Share this website'
          type='twitter'
          link=''
          text='OelPooler'
        />
        <SocialShare
          a11yTitle='Go to Linkedin to Share this website'
          type='linkedin'
          link=''
          title='Restaurant Reviewer'
          text='OelPooler'
        />
      </Box>
    </Box>
  </Footer>
)
}
