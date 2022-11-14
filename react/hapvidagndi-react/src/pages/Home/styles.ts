import styled from 'styled-components'

export const SectionNossosPlanos = styled.section`
  width: 100%;
  min-height: 729px;
  padding: 50px 100px;
  background: ${(props) => props.theme.colors.bgGray};
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 12px solid ${(props) => props.theme.colors.ctaBorder};
`
export const SectionContent = styled.div`
  width: 100%;
`
export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`

export const SubTitle = styled.p`
  font-size: 16px;

  color: ${(props) => props.theme.colors.gndiGray};
`
