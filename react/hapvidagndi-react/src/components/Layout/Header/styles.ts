import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 89px;
  z-index: 2;
`

export const ButtonContrast = styled.button`
  cursor: pointer;
  height: 15px;
  width: 15px;
  border: none;
  border-radius: 50%;

  &.contrast {
    background: yellow;
  }
`

export const ButtonFont = styled.button`
  cursor: pointer;
  height: 100%;
  border: none;
  background: none;
  color: white;
`

export const MenuAcessibility = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 150px;
  margin-left: auto;
`

export const Acessibility = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  background: black;
  color: white;
  padding: 0 62px;
`

export const MenuHeaderContainer = styled.div`
  width: 100%;
  height: 65px;
  box-shadow: 0px 3px 3px rgb(0 0 0 / 25%);

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0px 8%;
  }
`

export const MenuHeader = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  height: 40px;
`

export const NavContainer = styled.nav`
  width: 100%;

  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-around;

    a {
      color: ${(props) => props.theme.colors.gndiGray};
      font-weight: bold;
      text-decoration: none;

      &:hover {
        color: ${(props) => props.theme.colors.tertiary};
      }
    }
  }
`
