import React, {Component}  from 'react'
import Box from 'grommet/components/Box'
import RadioItem from 'components/RadioItem'

export default function RadioItemList({
  options,
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
        options.map(option => {
          const {name, value, checked} = option

          return (
            <RadioItem
              name={name}
              value={value}
              checked={checked}
              onChange={onChange}
            />
          )
        })
      }
    </Box>
  )
}
