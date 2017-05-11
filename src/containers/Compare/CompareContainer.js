import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as CompareActionCreators from "./actions";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import Timestamp from "grommet/components/Timestamp";

class LandingContainer extends Component {
  render () {
    const {
      actions:{
        inputChanged,
        optionSelected,
        submitClicked,
        closeModal,
        checkItemChanged,
        checkItemRemoved,
        checkItemAdded,
        compareClicked
      },
      radios:{
        options,
        currentValue
      },
      inputs,
      isModalOpen,
      data: {
        firstDate,
        lastDate,
        items
      }
    } = this.props
    return (
      <div>
        <Box align="center" pad={{ vertical: "large", between: "small" }}>
          <Box pad={{ horizontal: "large" }} align="center" textAlign="center"
               size={{ "width": { "max": "xxlarge" } }}>
            <Heading tag="h1" strong={true}>
              Ihre Angebote
            </Heading>
            <Paragraph size="medium" width="large" margin="none">
              {'Datum: '}
              <Timestamp value={firstDate} fields='date' />
              {' - '}
              <Timestamp value={lastDate} fields='date' />
            </Paragraph>
          </Box>

        </Box>
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
    CompareActionCreators,
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingContainer)
