import React from 'react'
import Details from './Details.js'
import styled from 'styled-components'

export default function Image(props) {
  const { url, hdurl, title, explanation } = props;

  return (
    <div>
      <StyledImage src={url} alt='Nasa photo of the day'/>
      <Details hdurl={hdurl} title={title} explanation={explanation} />
    </div>
    )
}

const StyledImage = styled.img`
  border: 2px solid ${pr => pr.theme.secondaryColor};

  &:hover {
    opacity: 75%;
  }
`