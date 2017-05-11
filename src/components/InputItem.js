import React, { Component }  from 'react'
import Box from 'grommet/components/Box'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import Select from 'grommet/components/Select'

export default function InputItem ({
  name,
  label,
  value,
  options,
  placeHolder,
  error,
  onChange
}) {
  const _onChange = ({ target: { value } }) => onChange({name, value})
  const _onSelect = ({ value: { value } }) => onChange({name, value})
  return (
    <Box
      pad={'medium'}
      basis={'1/3'}
    >
      <FormField
        label={label}
        error={error}
      >
        {options
          ? <Select
            className={'input__item'}
            name={name}
            value={value}
            placeHolder={placeHolder}
            options={options}
            onChange={_onSelect}
          />
          : <TextInput
            className={'input__item'}
            name={name}
            value={value}
            placeHolder={placeHolder}
            onDOMChange={_onChange}
          />

        }
      </FormField>
    </Box>
  )
}
