import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LandingActionCreators from './actions'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Timestamp from 'grommet/components/Timestamp'
import Layer from 'grommet/components/Layer'
import Button from 'grommet/components/Button'
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark'
import MinusIcon from 'grommet/components/icons/base/Subtract'
import PlusIcon from 'grommet/components/icons/base/Add'
import RadioItemList from 'components/RadioItemList'
import InputItemList from 'components/InputItemList'
import Info from 'components/Info'
import OilImage from 'assets/images/gas.jpg'

class LandingContainer extends Component {
  render () {
    const {
      actions:{
        inputChanged,
        optionSelected,
        submitClicked,
        closeModal
      },
      radios:{
        options,
        currentValue
      },
      inputs,
      isModalOpen,
      data: {
        firstDate,
        lastDate
      }
    } = this.props
    return (
      <div>
        {isModalOpen &&
        <Layer closer={true} align={'center'} onClose={closeModal}>
          <Box pad={'large'} align="center" textAlign="center"
               size={{ "width": { "max": "xxlarge" } }}>
            <Heading tag="h3" strong={true}>
              Vergleichsangaben
            </Heading>
            <Paragraph size="medium" width="large" margin="none">
              {'Datum: '}
              <Timestamp value={firstDate} fields='date' />
              {' - '}
              <Timestamp value={lastDate} fields='date' />
            </Paragraph>
          </Box>
          <Box pad={'medium'}>
            <Box colorIndex={'neutral-1'} pad={'medium'} direction={'row'} responsive={false}>
              <Box basis={'full'}>test</Box>
              <Button
                onClick={()=> console.log('test')}
                icon={
                  <MinusIcon colorIndex={'light-1'}/>
                }
                size={'small'}
              />
            </Box>
          </Box>
        </Layer>
        }
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
            name={'oil'}
            currentValue={currentValue}
            options={options}
            onChange={optionSelected}
          />
          <InputItemList items={inputs}
                         onChange={inputChanged}
          />
          <Box direction="row" full={'horizontal'} pad='medium' align={'center'} justify={'center'}>
            <Button size='large' icon={<CheckmarkIcon />}
                    className={'button--submit'}
                    label='Angebote vergleichen'
                    onClick={submitClicked}
                    primary={false}
                    secondary={true} />
          </Box>
        </Box>
        <Info
          image={OilImage}
          items={
            [
              {
                heading: 'Oelpreis könnte sich leicht erholen',
                description: 'Nachdem die Preise in den letzten Tagen immer nachgegeben haben, sind viele Fachleute der Meinung, der Preis könnte sich in den nächsten Tagen wieder etwas erholen.',
                anchor: {
                  href: '/about',
                  label: 'Mehr erfahren'
                }
              }
            ]
          }
        />
      </div>
    )
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => {
  console.log(state)
  return ({
    radios: state.landing.radios,
    inputs: state.landing.inputs,
    isModalOpen: state.landing.isModalOpen,
    data: state.landing.data
  })
}
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
