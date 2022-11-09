import {
  Acessibility,
  ButtonContrast,
  ButtonFont,
  HeaderContainer,
  Logo,
  MenuAcessibility,
  MenuHeader,
  MenuHeaderContainer,
  NavContainer,
} from './styles'

import LogoImage from '../../../assets/layout/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Acessibility>
        <MenuAcessibility>
          <span>Contraste</span>
          <ButtonContrast />
          <ButtonContrast className="contrast" />
          <ButtonFont>A-</ButtonFont>
          <ButtonFont>A+</ButtonFont>
        </MenuAcessibility>
      </Acessibility>
      <MenuHeaderContainer>
        <MenuHeader>
          <Link to="/">
            <Logo src={LogoImage} />
          </Link>
          <NavContainer>
            <ul>
              <li>
                <Link to="/institucional">Institucional</Link>
              </li>
              <li>
                <a
                  href="https://ri.hapvida.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Investidores
                </a>
              </li>
              <li>
                <Link to="/rede-de-atendimento">Rede de Atendimento</Link>
              </li>
            </ul>
          </NavContainer>
        </MenuHeader>
      </MenuHeaderContainer>
    </HeaderContainer>
  )
}
