import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ArrowRight from '../../assets/right.svg'

export const CardContainer = styled.div`
  height: 228px;

  border-radius: 10px;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.colors.borderGray};
  border-left: 10px solid ${(props) => props.theme.colors.ctaBorder};
  background: white;
  box-shadow: 1px 5px 12px 3px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    height: 45px;
    width: 45px;
  }
`

export const InformationContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 8px;
`

export const LinkIcon = styled(Link)`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: #0054b8 url(${ArrowRight}) no-repeat center center;
`

export const Title = styled.span`
  font-size: 40px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`

export const Lifes = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.gndiGray};
  font-weight: 500;
`
export const Description = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`
