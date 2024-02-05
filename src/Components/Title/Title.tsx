import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface Props{
  title: string,
  seeMore?: boolean
}

export function TitleComponent(props: Props) {
  const [title, setTitle] = useState(String)
  const [seeMore, setSeeMore] = useState(false)

  useEffect(()=>{

    setTitle(props.title)

    if(props.seeMore){
      setSeeMore(true)
    }

  }, [props])

  return ( 
    <>
      <TitleContainer>
        <Title>{title}</Title>
        { seeMore &&
            <SeeMore>Ver mais</SeeMore>
        }
      </TitleContainer>
    </>
  );
}

const TitleContainer = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.primaryColor };
`

const Title = styled.h2`
  font-size: 1.5rem;
`

const SeeMore = styled.span = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`