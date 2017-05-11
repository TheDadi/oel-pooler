import React, {Component}  from 'react'
import Hero from 'grommet/components/Hero'
import InfoItem from 'components/InfoItem'

export default function Info({image, items}) {

  return (
    <Hero
      size={
        {
          height:'small',
          width:'full'
        }
      }
      backgroundImage={image}
      colorIndex={'light-1'}
      justify={'start'}>
      {
        items.map(item => {
          const {heading, description, anchor} = item

          return (
            <InfoItem
              heading={heading}
              description={description}
              anchor={anchor}
            />
          )
        })
      }
    </Hero>
  )
}
