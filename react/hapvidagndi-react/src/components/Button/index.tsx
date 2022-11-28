import  {ButtonContainer, Button}  from "./styles"

interface ButtonActionProps{
  tittle: string
}


export function ButtonAction({tittle}:ButtonActionProps){
  return(
    <ButtonContainer>
      <Button>
        {tittle}
      </Button>
    </ButtonContainer>
  )
}