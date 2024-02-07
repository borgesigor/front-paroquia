import { styled } from 'styled-components';
import BgImage from '../../assets/background.png'

export function BannerComponent() {
  return ( 
    <>
      <BannerContainer>

        <div>
          <Image src={BgImage} />
          <OverlayEffect></OverlayEffect>
        </div>

        <Information>
          <div></div>

          <InformationTexts>
            <InformationTextsTitle>A Antiga Casa do Pai Eterno</InformationTextsTitle>
            <InformationTextsDescription>Onde a Devoção se Encontra com a Comunhão, Transformando
Corações e Unindo Almas no Amor do Pai Eterno.</InformationTextsDescription>
          </InformationTexts>

          <div>
            <Button>
              História da Paróquia
              <i className="material-symbols-rounded" style={{ fontSize: '1.4rem' }}> arrow_forward </i>
            </Button>
          </div>
        </Information>

      </BannerContainer>
      <MarginContainer/>
    </>
  );
}

const BannerSize = '75vh';

const MarginContainer = styled.div`
  width: 100%;
  height: ${BannerSize};
  position: relative;
  z-index: -1;
`

const BannerContainer = styled.div`
  top: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  z-index: 0;
  width: 100%;
  height: ${BannerSize};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  filter: brightness(110%) contrast(100%);
`

const OverlayEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #202020;
  opacity: 0.43;
`

const Information = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 5rem 2rem;
  box-sizing: border-box;
  text-align: center;
  color: white;
`

const InformationTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

const InformationTextsTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 120%;
`

const InformationTextsDescription = styled.p`
  font-size: 1rem;
  font-weight: 500;
  max-width: 34rem;
  color: #e7e7e7;
  opacity: 1;
  line-height: 170%;
  font-family: ${props => props.theme.secondaryFont};
`

const Button = styled.button`
  background: white;
  padding: 0.7rem 1rem;
  padding-left: 1.2rem;
  border-radius: 2rem;
  color: #141414;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: left;
  line-height: 120%;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: ${props => props.theme.secondaryFont};
  border: none;
  text-align: center;

  opacity: 1;

  i{
    position: relative;
    left: 0rem;
    transition: .2s;
  }

  &:hover {
    /* border: 1px solid #ffffff4c; */
    opacity: 90%;

    i{
      left: 0.2rem;
    }
  }
`
