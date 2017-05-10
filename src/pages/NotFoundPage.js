import React from 'react'
import { Link } from 'react-router'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Footer from 'grommet/components/Footer'

export default function NotFoundPageö () {
  return (
    <div className={'app__not-found'}>
      <Section className={'app__not-found__middle'}>
        <Heading align='center' tag='h1'>
          Page Not Found
        </Heading>
        <Article>
          <Heading align='center' tag='h3' className={'app__not-found__section-header'}>
            We're sorry, but there was nothing we could do. 😳
          </Heading>
          <Footer className={'app__not-found__footer'}>
            <Link to='/'>
              <Button
                a11yTitle='Back to Home Button'
                onClick={(x) => x} // eslint-disable-line react/jsx-no-bind
              >
                Take Me Home 🏠
              </Button>
            </Link>
          </Footer>
        </Article>
      </Section>
    </div>
  )
}
