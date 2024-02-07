import styled from 'styled-components';

interface Props{
  icon?: string,
  responsive?: boolean,
  vertical?: boolean,
  title: string,
  description?: string,
  image?: string,
  href: string,
  imageSmall?: string
}

export function CardComponent(props: Props) {
  return ( 
    <Card href={props.href} >
      {
        props.image &&
        <Image>
          <img loading="lazy" src={props.image} alt="" />
        </Image>
      }
      <CardData>
        {
          props.imageSmall &&
            <img loading="lazy" src={props.imageSmall} alt="" width={40} />
        }
        {
          props.icon &&
            <i style={{ fontSize: '1.5rem', marginLeft: '-2px' }} className="iconsax" icon-name={props.icon}></i>
        }
        <DataElement>
          <span className='title'>{props.title}</span>
          { props.description && <span className='description'>{props.description}</span> }
        </DataElement>
      </CardData>
    </Card>
  );
}

const Card = styled.a`
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-bottom: 2px solid;
  border-color: ${props => props.theme.borderColor};
  color: ${props => props.theme.primaryColor};
  box-sizing: border-box;
  transition: .1s;
  transition-property: border-color;

  &:hover{
    border-color: ${props => props.theme.borderHardColor};
  }
`

const Image = styled.div`
  max-width: 100%;
  max-height: 270px;
  overflow: hidden;
  flex: 2;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const DataElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;

  .title{
    font-size: 1rem;
    /* font-family: ${props => props.theme.secondaryFont}; */
    font-weight: 600;
  }

  .description{
    font-size: 0.9rem;
    line-height: 170%;
    opacity: 70%;
    font-family: ${props => props.theme.secondaryFont};
  }
`

const CardData = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1rem;
  padding-right: 2rem;
  gap: 1rem;
`