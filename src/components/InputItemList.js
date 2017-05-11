import React, {Component}  from 'react'
import Box from 'grommet/components/Box'
import InputItem from 'components/InputItem'

export default function InputItemList({items}) {
  return (
    <Box
      direction={'row'}
      full={'horizontal'}
      colorIndex={'brand'}
    >
      {
        items.map(item => {
          const { name, value, placeHolder, onChange } = item

          return (
            <InputItem
              name={name}
              value={value}
              placeHolder={placeHolder}
              onChange={onChange}
            />
          )
        })
      }
    </Box>
  )
}
