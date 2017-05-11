import React, {Component}  from 'react'
import Box from 'grommet/components/Box'
import RadioItem from 'components/RadioItem'

export default function RadioItemList({
  name,
  options,
  currentValue,
  onChange
}) {
  return (
    <Box
      size={{width: 'xxlarge'}}
      direction={'row'}
      justify={'between'}
      pad={'large'}
    >
      {
        options.map((option,index) => {
          const {label, value} = option
          const checked = currentValue === value
          return (
            <RadioItem
              key={index}
              name={name}
              value={value}
              label={label}
              checked={checked}
              onChange={onChange}
            />
          )
        })
      }
    </Box>
  )
}
