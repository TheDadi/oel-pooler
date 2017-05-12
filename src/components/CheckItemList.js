import React, { Component }  from 'react'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Pulse from 'grommet/components/icons/Pulse'
import CheckItem from 'components/CheckItem'
import PlusIcon from 'grommet/components/icons/base/Add'

export default function CheckItemList ({ items, onChange, onRemove, onAdd }) {
  console.log(items)
  return (
    <Box responsive={false}>
      {
        items.map((item, index) => {
          console.log(item)
          const { numberOf, howMuch, what, where } = item

          console.log(numberOf, howMuch, what )
          return (
            <CheckItem
              key={index}
              index={index}
              numberOf={numberOf}
              howMuch={howMuch}
              where={where}
              what={what}
              onChange={onChange}
              onRemove={onRemove}
            />
          )
        })
      }
      <Box align={'end'} pad={'medium'} >
        Weitere Abladestellen hinzufügen  <Button onClick={()=> onAdd()}><Pulse icon={<PlusIcon />} /></Button>
      </Box>
    </Box>
  )
}
