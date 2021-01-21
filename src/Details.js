import React from 'react'
import styled from 'styled-components'

export default function Details(props) {
    const { title, hdurl, explanation } = props;

    return (
        <div>
            <StyledLink href={hdurl}>{title}</StyledLink>
            <p>{explanation}</p>
        </div>
    )
}

const StyledLink = styled.a`
	&:hover {
		opacity:75%;
		font-weight: bold;
	}
`