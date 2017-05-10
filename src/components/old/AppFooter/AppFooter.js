import React from 'react';
import Footer from 'grommet/components/Footer'
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card'

export default function AppFooter() {
  return (
    <Footer full="horizontal">
      <Box colorIndex="light-2" pad="large" align="center" full="horizontal">
        <Box className="footer-cards-container" pad={{vertical: "medium"}}
             size={{width: 'xxlarge'}} direction="row" flex="grow">
          <Card
            pad={{horizontal: "large"}}
            contentPad="medium"
            heading="Lorem ipsum dolor sit amet"
            label="Label"
            basis="1/2"
            link={
              <Anchor href="http://www.grommet.io/docs/" primary={true}>
                Learn More
              </Anchor>
            }
            separator="right" />
          <Card
            pad={{horizontal: "large"}}
            contentPad="medium"
            heading="Lorem ipsum dolor sit amet"
            label="Label"
            basis="1/2"
            link={
              <Anchor href="http://www.grommet.io/docs/" primary={true}>
                Learn More
              </Anchor>
            } />
        </Box>
      </Box>
    </Footer>
  );
};
