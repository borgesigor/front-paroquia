import { ReactNode } from 'react';
import styled from "styled-components";

interface Props{
  children: ReactNode
}

export function MainWrapperComponent(props: Props){
  return (
    <Main>
      <MainWrapper>
        { props.children }
      </MainWrapper>
    </Main>
  )
}

const Main = styled.div`
  padding: 0 2em;
  background: ${props => props.theme.background};  
`

const MainWrapper = styled.div`
  max-width: 1280px;
  box-sizing: border-box;
  margin: 0 auto;
  font-family: ${props => props.theme.primaryFont};
  color: ${props => props.theme.primaryColor};  
`