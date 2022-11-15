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

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 50px 50px;
  }
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

export const CardList = styled.div`
  margin-top: 16px;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap; */
  max-width: 1400px;

  display: grid;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
