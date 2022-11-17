import {
  CardContainer,
  Field,
  Image,
  InformationContent,
  SubTitle,
  Title,
} from './styles'

interface CardNumbersProps {
  image: string
  title: string
  subtitle: string
}

export function CardNumbers({ image, title, subtitle }: CardNumbersProps) {
  return (
    <CardContainer>
      <Field>
        <Image src={image} alt="icone" />
      </Field>
      <InformationContent>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </InformationContent>
    </CardContainer>
  )
}
