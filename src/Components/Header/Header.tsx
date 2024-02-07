import Logo from './../../assets/logo.svg'
import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { DropdownComponent } from "./Dropdown";
import styled from "styled-components";
import { MenuArray } from "./IMenu";
import { MobileMenuComponent } from './MobileMenu';

const HeaderBGTransitionTime = '0.2s'

interface Props{
  forceBackground?: boolean
}

export function HeaderComponent(props: Props) {
  const [headerBGVisibility, setHeaderBGVisibility] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    if(props.forceBackground){
      setHeaderBGVisibility(true)
    }
  }, [props.forceBackground])
  
  const menuOnMouseEnter = () => {
    setDropdownVisible(true)
    setHeaderBGVisibility(true);
  }

  const menuOnMouseLeave = () => {
    setDropdownVisible(false)

    if(!scrolled && !props.forceBackground){
      setHeaderBGVisibility(false);
    }
  }

  useEffect(()=>{
    if(scrolled){
      setHeaderBGVisibility(true);
    }else if(!dropdownVisible && !props.forceBackground){
      setHeaderBGVisibility(false)
    }
  }, [scrolled])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll()
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenuState, setMobileMenuState] = useState(false);

  const toggleMobileMenuState = () => {
    setMobileMenuState(!mobileMenuState)
  }

  return ( 
    <>

      <Header $BGVisibility={headerBGVisibility} className='header' >

        <HeaderWrapper>

          <Left>
            <ReactSVG src={Logo}/>
          </Left>

          <Middle>
            <div className='mobile-hide'>
              {
                MenuArray.map((elem, index) => 
                  <MenuElement key={index} onMouseEnter={() => elem.dropdown && menuOnMouseEnter() } onMouseLeave={menuOnMouseLeave} >
                    <Menu href={elem.path}>
                      <span>
                        { elem.menu }
                      </span>
                      <span>
                        { 
                          elem.dropdown &&  
                          <i className="iconsax" icon-name="chevron-down"></i>
                        }
                      </span>
                    </Menu>
                    {
                      (elem.dropdown) &&
                        <Dropdown className='dropdown' >
                          <DropdownComponent menu={elem}/>
                        </Dropdown>
                        
                    }
                  </MenuElement>
                )

              }
            </div>
          </Middle>

          <Right>
            <Button style={{ cursor: 'pointer' }} >
              <i style={{ fontSize: '1.5rem' }} className="iconsax" icon-name="instagram"></i>
            </Button>
            <Button style={{ cursor: 'pointer' }} >
              <i style={{ fontSize: '1.5rem' }} className="iconsax" icon-name="play-square"></i>
            </Button>
          </Right>

          <Button className="mobile" onClick={toggleMobileMenuState} >
            <i style={{ fontSize: '2rem' }} className="iconsax" icon-name="hamburger-menu"></i>
          </Button>
          
        </HeaderWrapper>

      </Header>

      <MobileMenuComponent items={MenuArray} opened={mobileMenuState} toggle={toggleMobileMenuState} />

    </>
  );
}

const HeaderSize = '4rem';

const Dropdown = styled.div`
  position: fixed;
  margin-top: ${HeaderSize};
  background: white;
  width: 100%;
  left: 0px;

  padding: 2rem 4rem;
  padding-bottom: 2rem;
  box-sizing: border-box;

  border-bottom: 1px solid;
  border-color: ${props => props.theme.borderColor};

  box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.011),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.016),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.02),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.024),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.029),
    100px 100px 80px rgba(0, 0, 0, 0.04)
  ;

`

const Menu = styled.a`
  opacity: 0.7;
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0rem 1.5rem;
  transition: 0.2s;
  transition-property: opacity;
  display: flex;
  gap: 0.2rem;

  &:hover{
    opacity: 1;
  }
`

const Header = styled.div<{ $BGVisibility: boolean }>`
  position: fixed;
  z-index: 99;
  background: ${props => props.$BGVisibility ? props.theme.background : 'transparent'};
  width: 100%;
  display: flex;
  height: ${HeaderSize};
  color: ${props => props.$BGVisibility ? props.theme.primaryColor : 'white'};
  transition: ${HeaderBGTransitionTime};
  padding: 0rem 4rem;
  box-sizing: border-box;
  font-family: ${props => props.theme.secondaryFont};
  border-bottom: 1px solid;
  border-color: ${props => props.$BGVisibility ? props.theme.borderColor : 'transparent'};

  svg{
    width: 3.3rem;
    fill: ${props => props.$BGVisibility ? props.theme.primaryColor : 'white'};
  }

  @media screen and (max-width: 1100px) {
    padding: 0rem 2rem;
  }

  @media screen and (min-width: 1101px) {
    .mobile{
      display: none;
    }
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${props => props.theme.headerWidth};
  margin: 0 auto;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100%;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  height: '100%';
  gap: 1rem;

  @media screen and (max-width: 1100px) {
    display: none;
  }
` 

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  .mobile-hide{
    display: flex;
    height: 100%;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

const MenuElement = styled.div`
  height: 100%;
  background: transparent;
  border: none;
  font-size: 0.9rem;
  font-weight: 400;
  display: flex;
  align-content: center;

  .dropdown{
    opacity: 0;
    transition: ${HeaderBGTransitionTime} ease-in-out;
    visibility: hidden;
    top: 0px;
    z-index: -1;
    overflow: hidden;
    transform: translateY(-10px);
  }

  &:hover{
    .dropdown{
      visibility: visible;
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

const Button = styled.div`
  height: 100%;
  background: transparent;
  border: none;
  font-size: 0.9rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: 0.2s;
  transition-property: opacity;

  &:hover{
    opacity: 1;
  }
`