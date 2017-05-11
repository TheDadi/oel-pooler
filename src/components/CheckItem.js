import React, { Component }  from 'react'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import MinusIcon from 'grommet/components/icons/base/Subtract'
import CheckInputItem from 'components/CheckInputItem'

export default function CheckItem ({
  index,
  numberOf,
  howMuch,
  where,
  what,
  onChange,
  onRemove
}) {
  return (
    <Box pad={'small'} direction={'row'} responsive={false}>
      <Box basis={'full'} direction={'column'}>
        <Box direction={'row'}>
          <CheckInputItem
            index={index}
            name={'numberOf'}
            label={'Anzahl Abladestellen'}
            value={numberOf.value}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            error={numberOf.error}
            onChange={onChange}
          />
          <CheckInputItem
            index={index}
            name={'where'}
            label={'Wo?'}
            value={where.value}
            error={where.error}
            onChange={onChange}
          />
        </Box>
        <Box direction={'row'}>
          <CheckInputItem
            index={index}
            name={'howMuch'}
            label={'Wieviel?'}
            placeholder={'2500'}
            value={howMuch.value}
            error={howMuch.error}
            onChange={onChange}
          />
          <CheckInputItem
            index={index}
            name={'what'}
            place
            label={'Was soll geliefert werden?'}
            value={what.value}
            error={what.error}
            options={
              [
                {
                  label: 'Heizöl extra-leicht',
                  value: 'Heizöl extra-leicht'
                },
                {
                  label: 'Heizöl öko schwefelarm',
                  value: 'Heizöl öko schwefelarm'
                }
                ,
                {
                  label: 'Heizöl Dieselqualität',
                  value: 'Heizöl Dieselqualität'
                }
              ]
            }
            onChange={onChange}
          />
        </Box>
      </Box>
      <Button
        onClick={() => onRemove({ index })}
        primary={true}
        icon={
          <MinusIcon />
        }
        size={'small'}
      />
    </Box>
  )
}
