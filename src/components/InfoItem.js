import React, {Component}  from 'react'
import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'
import Anchor from 'grommet/components/Anchor'

export default function InfoItem({
  heading,
  description,
  anchor
}) {

  const {href, label} = anchor

  return (
    <Card
      className={'info__item'}
      basis={'1'}
      heading={
        <Heading
          tag={'h3'}
          strong={true}
        >
          {heading}
        </Heading>
      }
      contentPad={'small'}
      description={description}
      size={
        {
          width: 'xxlarge'
        }
      }
      link={
        <Anchor
          href={href}
          primary={true}
          label={label}
        />
      }
    />
  )
}
