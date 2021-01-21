import React from 'react'
import styled from 'styled-components'

export default function Header(props) {
	const { date } = props;
	
  return (
    <StyledHeader>
      <h1>NASA Photo of the Day</h1>
      <div style={{fontStyle: 'oblique'}}>for</div>
      <span>{date}</span>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
	div {
		margin-top: -15px;
		margin-bottom: 10px;
	}

	margin-bottom: 10px;
	
`