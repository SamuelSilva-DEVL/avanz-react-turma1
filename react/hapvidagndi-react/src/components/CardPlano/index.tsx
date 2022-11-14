import {
  CardContainer,
  Description,
  InformationContent,
  Lifes,
  LinkIcon,
  Title,
} from './styles'

interface CardPlanoProps {
  image: string
  title: string
  lifes?: string
  description: string
  link: string
}

export function CardPlano({
  image,
  title,
  lifes,
  description,
  link,
}: CardPlanoProps) {
  return (
    <CardContainer>
      <InformationContent>
        <img src={image} alt="icone" />
        <Title>{title}</Title>
        {lifes && <Lifes>{lifes}</Lifes>}
        <Description>{description}</Description>
      </InformationContent>
      <LinkIcon to={link} />
    </CardContainer>
  )
}
