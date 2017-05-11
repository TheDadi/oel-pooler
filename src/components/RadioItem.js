import React, {Component}  from 'react'
import Box from 'grommet/components/Box'
import RadioButton from 'grommet/components/RadioButton'
import uuid from 'uuid/v4'

export default function RadioItem({
  name,
  label,
  value,
  checked,
  onChange
}) {
  const _onChange = ({ target: { value } }) => onChange(value)
  return (
    <Box pad='medium'>
      <RadioButton
        id={uuid()}
        name={name}
        label={label}
        onChange={_onChange}
        value={value}
        checked={checked}
      />
    </Box>
  )
}
