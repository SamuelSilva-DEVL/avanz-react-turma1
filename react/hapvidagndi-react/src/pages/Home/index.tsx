import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Banner from '../../assets/banner_hapvida_1600x540.png'
import { SectionContent, SectionNossosPlanos, SubTitle, Title } from './styles'
import { CardPlano } from '../../components/CardPlano'

import Heart from '../../assets/heart_0.svg'
import HomeImage from '../../assets/home.svg'
import Build from '../../assets/build.svg'

const planos = [
  {
    image: Heart,
    title: 'Individuais e Familiares',
    description: 'O plano ideal para cuidar de você e sua família.',
    link: 'institucional',
  },
  {
    image: HomeImage,
    title: 'Pequenas e Médias Empresas',
    description: 'Inovação e cuidado para pequenas e médias empresas.',
    lifes: '(2 a 99 vidas)',
    link: 'rede-de-atendimento',
  },
  {
    image: Build,
    title: 'Empresas de Grande Porte',
    description: 'Soluções inteligentes para saúde da sua empresa.',
    lifes: '(de 100 a 2.999 vidas)',
    link: 'institucional',
  },
  {
    image: Build,
    title: 'Empresas de Grande Porte',
    description: 'Soluções inteligentes para saúde da sua empresa.',
    lifes: '(a partir de 3.000 vidas)',
    link: 'institucional',
  },
]
export function Home() {
  return (
    <>
      <Carousel showThumbs={false} showStatus={false}>
        {[
          <img
            key="banner1"
            src={Banner}
            alt="banner hapvida"
            loading="lazy"
          />,
          <img
            key="banner2"
            src={Banner}
            alt="banner hapvida"
            loading="lazy"
          />,
          <img
            key="banner2"
            src={Banner}
            alt="banner hapvida"
            loading="lazy"
          />,
        ]}
      </Carousel>
      <SectionNossosPlanos>
        <img src="" alt="" />
        <SectionContent>
          <Title>Conheça nossos planos:</Title>
          <SubTitle>Planos para você e sua família.</SubTitle>
          {planos.map((plano) => (
            <CardPlano
              key={plano.title}
              image={plano.image}
              title={plano.title}
              description={plano.description}
              link={plano.link}
              lifes={plano.lifes}
            />
          ))}
        </SectionContent>
      </SectionNossosPlanos>
    </>
  )
}
