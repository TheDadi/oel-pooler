import React, { Component }  from 'react'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import Select from 'grommet/components/Select'

export default function CheckInputItem ({
  index,
  name,
  label,
  value,
  options,
  placeHolder,
  error,
  onChange
}) {
  const _onChange = ({ target: { value } }) => onChange({index,name, value})
  const _onSelect = ({ value: { value } }) => onChange({index, name, value})
  return (
    <FormField
      label={label}
      error={error}
    >
      {options
        ? <Select
          name={name}
          value={value}
          placeHolder={placeHolder}
          options={options}
          onChange={_onSelect}
        />
        : <TextInput
          name={name}
          value={value}
          placeHolder={placeHolder}
          onDOMChange={_onChange}
        />

      }
    </FormField>
  )
}
