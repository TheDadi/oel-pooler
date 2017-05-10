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
      pad={"medium"} colorIndex={'light-2'} full='horizontal'>
      <Paragraph margin='none'>
        © 2016 Oel Pooler
      </Paragraph>
      <Box direction={'row'}>
        <SocialShare
          a11yTitle='Go to Facebook to Share this website'
          type='facebook'
          link='http://restaurant-reviewer-client.herokuapp.com'
          text='A11y Restaurant Reviewer App'
        />
        <SocialShare
          a11yTitle='Go to Twitter to Share this website'
          type='twitter'
          link='http://restaurant-reviewer-client.herokuapp.com'
          text='A11y Restaurant Reviewer App'
        />
        <SocialShare
          a11yTitle='Go to Linkedin to Share this website'
          type='linkedin'
          link='http://restaurant-reviewer-client.herokuapp.com'
          title='Restaurant Reviewer'
          text='A11y Restaurant Reviewer App'
        />
      </Box>
    </Box>
  </Footer>
)
}
