import React, {Component}  from 'react'
import Hero from 'grommet/components/Hero'
import InfoItem from 'components/InfoItem'

export default function Info({image, items}) {

  return (
    <Hero
      backgroundImage={image}
      colorIndex={'light-1'}
      justify={'start'}>
      {
        items.map((item,index) => {
          const {heading, description, anchor} = item

          return (
            <InfoItem
              key={index}
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
