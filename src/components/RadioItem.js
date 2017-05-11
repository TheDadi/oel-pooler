import React, {Component}  from 'react'
import Box from 'grommet/components/Box'
import RadioButton from 'grommet/components/RadioButton'

export default function RadioItem({
  name,
  label,
  checked,
  onChange
}) {
  return (
    <Box pad='medium'>
      <RadioButton
        name={name}
        label={label}
        onChange={onChange}
        checked={checked}
      />
    </Box>
  )
}
