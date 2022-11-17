import styled from 'styled-components'

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

export const CardNumberList = styled.div`
  margin-top: 64px;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap; */
  max-width: 1400px;

  display: grid;
  column-gap: 2rem;
  row-gap: 3rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const TitleVideo = styled.p`
  color: ${(props) => props.theme.colors.gndiGray};
  font-size: 36px;
  font-weight: bold;
  margin-top: 64px;
`

export const SubTitleVideo = styled.p`
  color: ${(props) => props.theme.colors.gndiGray};
  font-size: 24px;
  font-weight: 400;
`
