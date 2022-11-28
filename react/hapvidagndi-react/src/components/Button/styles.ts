import styled  from "styled-components";
//${(props) => props.theme.colors.ctaBorder} cor da letra em destaque
export const ButtonContainer = styled.div`
  display: flex;
  height: 50px;
  width: 350px;
  justify-content: center;
  margin-top: 15px;
  padding: 0px;
  margin-left: 50px;
`

export const Button = styled.button`
  cursor: pointer;
  border-radius: 50rem;
  color: #ffff;
  width: 350px;
  height: auto;
  border: none;
  font-size: 20px;
  padding: 0px;
  background-color: ${(props) => props.theme.colors.primary};

  &:hover{
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`