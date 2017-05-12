import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as CompareActionCreators from "./actions";
import Box from "grommet/components/Box";
import Button from "grommet/components/Button";
import Heading from "grommet/components/Heading";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";
import Table from "grommet/components/Table";
import TableHeader from "grommet/components/TableHeader";
import TableRow from "grommet/components/TableRow";
import Paragraph from "grommet/components/Paragraph";
import Timestamp from "grommet/components/Timestamp";

class LandingContainer extends Component {
  render() {
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
        <Box align="center">
          <Box align="center">
            <Box pad={{vertical: "large"}}>
            <Heading tag="h1" strong={true}>
              Ihre Angebote
            </Heading>
            <Paragraph size="medium" width="large" margin="none">
              {'Datum: '}
              <Timestamp value={firstDate} fields='date'/>
              {' - '}
              <Timestamp value={lastDate} fields='date'/>
            </Paragraph>
            </Box>
            <Table responsive={true}>
              <TableHeader  labels={['Anbieter',	'Preis* / 100l',	'Total*']} />
              <TableRow>
                <td>
                  Oel Pool
                </td>
                <td>
                  CHF 75.70
                </td>
                <td>
                  CHF 4'540.75
                </td>
                <td>
                  <Button primary={true} onClick={()=> console.log('button clicked')}>Bestellen</Button>
                </td>
              </TableRow>

              <TableRow>
                <td>
                  Kuhn
                </td>
                <td>
                  CHF 80.00
                </td>
                <td>
                  CHF 5'540.75
                </td>
                <td>
                  <Button primary={true} onClick={()=> console.log('button clicked')}>Bestellen</Button>
                </td>
              </TableRow>
            </Table>
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
