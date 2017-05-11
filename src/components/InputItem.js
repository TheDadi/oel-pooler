import React, {Component}  from 'react'
import Box from 'grommet/components/Box'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'

export default function InputItem({
  name,
  label,
  placeHolder,
  onChange
}) {
  return (
    <Box
      pad={'medium'}
      basis={'1/3'}
    >
      <FormField
        label={label}
        colorIndex={'brand'}
      >
        <TextInput
          name={name}
          placeHolder={placeHolder}
          onDOMChange={onChange}
        />
      </FormField>
    </Box>
  )
}
