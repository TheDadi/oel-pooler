import React, {Component}  from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Anchor from 'grommet/components/Anchor'

export default function InfoItem({
  heading,
  description,
  anchor
}) {

  const {href, label} = anchor

  return (
    <Box
      className={'info__item'}
      pad={'medium'}
      basis={'full'}>
      <Heading
        tag={'h3'}
        strong={true}
      >
        {heading}
      </Heading>
      <Paragraph>
        {description}
      </Paragraph>
      <Anchor
        href={href}
        primary={true}
        label={label}
      />
    </Box>
  )
}
