import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Field = styled.div`
  height: 115px;
  width: 115px;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 23%);
  border-radius: 20px;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  transform: rotate(-45deg);
  height: 75px;
`

export const Title = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: bold;
  font-size: 24px;
`

export const SubTitle = styled.p`
  font-size: 16px;

  color: ${(props) => props.theme.colors.gndiGray};
`
