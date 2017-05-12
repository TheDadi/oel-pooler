import React, {Component}  from 'react'
import Box from 'grommet/components/Box'
import InfoItem from 'components/InfoItem'

export default function Info({image, items}) {

  return (
    <Box
      texture={image}
      colorIndex={'light-1'}
      className={'info'}
      align={'center'}
      justify={'center'}>
      {
        items.map((item,index) => {
          const {heading, description, anchor} = item

          return (
            <InfoItem
              key={index}
              heading={heading}
              description={description}
              anchor={anchor}
            />
          )
        })
      }
    </Box>
  )
}
