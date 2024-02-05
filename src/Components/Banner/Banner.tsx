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
              <i className="iconsax" icon-name="location" style={{ fontSize: '1.2rem' }}></i>
              Praça do Santuário, 238 - Centro, Trindade - GO
            </Button>
          </div>
        </Information>

      </BannerContainer>
      <MarginContainer/>
    </>
  );
}

const MarginContainer = styled.div`
  width: 100%;
  height: 72vh;
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
  height: 72vh;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  filter: brightness(100%) contrast(70%);
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
  padding: 5rem 1rem;
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
  font-size: 3rem;
  font-weight: 600;
  line-height: 120%;
`

const InformationTextsDescription = styled.p`
  font-size: 1rem;
  font-weight: 500;
  max-width: 34rem;
  color: #e7e7e7;
  opacity: 0.8;
  line-height: 170%;
  font-family: ${props => props.theme.secondaryFont};
`

const Button = styled.button`
  background: #ffffff1d;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: white;
  transition: 0.3s;
  border: 1px solid #ffffff26;
  opacity: 80%;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(4px);
  text-align: left;
  line-height: 120%;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: ${props => props.theme.secondaryFont};

  &:hover {
    border: 1px solid #ffffff4c;
    opacity: 90%;
  }
`
