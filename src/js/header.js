import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  background-color: rgb(255, 255, 255);
  color: rgb(97, 13, 255);
`

const Title = styled.h1`
  margin: 0;
  padding: 2rem;
  font-weight: 400;
`

const TitleUpper = styled.span`
  display: block;
  font-weight: 700;
`

const TitleLower = styled.span`
  display block;
  font-weight: 300;
`

const Header = () => {
  return (
    <StyledHeader>
      <Title>
        <TitleUpper>React</TitleUpper>
        <TitleLower>{ '<ReadingProgress />' }</TitleLower>
      </Title>
    </StyledHeader>
  )
}

export default Header
