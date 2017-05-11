import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LandingActionCreators from './actions'
import Hero from 'grommet/components/Hero'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import Select from 'grommet/components/Select'
import RadioButton from 'grommet/components/RadioButton'
import Button from 'grommet/components/Button'
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark'
import ClockIcon from 'grommet/components/icons/base/Clock'
import Card from 'grommet/components/Card'
import Anchor from 'grommet/components/Anchor'
import RadioItemList from 'components/RadioItemList'
import LocationIcon from 'components/LocationIcon'
import OilImage from '../../assets/images/gas.jpg'

class LandingContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
  }

  render () {
    return (
      <div>
        <Box align="center" pad={{ vertical: "large", between: "small" }}>
          <Box pad={{ horizontal: "large" }} align="center" textAlign="center"
            size={{ "width": { "max": "xxlarge" } }}>
            <Heading tag="h1" strong={true}>
              Ölpreise einfach vergleichen
            </Heading>
            <Paragraph size="xlarge" width="large" margin="none">
              In wenigen Schritten zum passenden Angebot. Anbieter direkt vergleichen und sofort bestellen.
            </Paragraph>
          </Box>
          <RadioItemList
            options={
              [
                {

                }
              ]
            }
            onChange={}
          />
          <Box size={{ width: "xxlarge" }} direction="row" justify='between' pad={'large'}>

            <Box pad="medium">
              <RadioButton id='choice1-2'
                name='choice1-2'
                label='Heizöl öko schwefelarm'
                checked={false} />
            </Box>
            <Box pad="medium">
              <RadioButton id='choice1-2'
                name='choice1-2'
                label='Heizöl Dieselqualität'
                checked={false}/>
            </Box>
          </Box>
          <Box direction="row" full={'horizontal'} colorIndex={'brand'}>
            <Box pad="medium" basis="1/3">
              <FormField label='Wieviel?' colorIndex={'brand'}>
                <TextInput />
              </FormField>
            </Box>
            <Box pad="medium" basis="1/3">
              <FormField label='Wann?'>
                <Select />
              </FormField>
            </Box>
            <Box pad="medium" basis="1/3">
              <FormField label='Wohin?'>
                <TextInput />
              </FormField>
            </Box>
          </Box>
          <Box direction="row" full={'horizontal'} pad='medium' align={'center'} justify={'center'}>
            <Button size='large' icon={<CheckmarkIcon />}
              className={'button--submit'}
              label='Angebote vergleichen'
              href='#'
              primary={false}
              secondary={true} />
          </Box>
        </Box>
        <Hero size={{height:'small', width:'full'}} backgroundImage={OilImage} colorIndex="light-1" justify="start">
          <Card
            className={'hero__card'}
            basis='1'
            heading={
              <Heading tag='h3' strong={true}>
                Oelpreis könnte sich leicht erholen
              </Heading>
            }
            contentPad={'small'}
            description="Nachdem die Preise in den letzten Tagen immer nachgegeben haben, sind viele Fachleute der Meinung, der Preis könnte sich in den nächsten Tagen wieder etwas erholen."
            size={{width:"xxlarge"}}
            link={
              <Anchor href="/about" primary={true} label="Mehr erfahren" />
            } />
        </Hero>
      </div>
    )
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({})
// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingContainer)
