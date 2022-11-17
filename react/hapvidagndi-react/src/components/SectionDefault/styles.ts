import styled, { css } from 'styled-components'

interface SectionProps {
  borderColor: 'primary' | 'secondary'
  background: string
  backgroundImage?: string
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  min-height: 729px;
  padding: 50px 100px;
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.backgroundImage &&
    css`
      background-image: url(${props.backgroundImage});
      background-repeat: no-repeat;
      background-size: cover !important;
      background-size: contain !important;
    `}

  border-top: 10px solid
    ${(props) =>
    props.borderColor === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.ctaBorder};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 50px 50px;
  }
`

export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`

export const SectionContent = styled.div`
  width: 100%;
`

export const SubTitle = styled.p`
  font-size: 16px;

  color: ${(props) => props.theme.colors.gndiGray};
`
