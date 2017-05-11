import React, {Component}  from 'react'
import Box from 'grommet/components/Box'
import InputItem from 'components/InputItem'

export default function InputItemList({items, onChange}) {
  return (
    <Box
      direction={'row'}
      full={'horizontal'}
      colorIndex={'brand'}
    >
      {
        items.map((item,index) => {
          const { name, label, value, placeHolder, error } = item

          return (
          <InputItem
          key={index}
          name={name}
          label={label}
          value={value}
          error={error}
          options={item.options}
          placeHolder={placeHolder}
          onChange={onChange}
            />
          )
        })
      }
    </Box>
  )
}
