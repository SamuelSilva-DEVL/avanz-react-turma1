import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
// import YouTube from 'react-youtube'
import Banner from '../../assets/banner_hapvida_1600x540.png'
import { CardList, CardNumberList, SubTitleVideo, TitleVideo, TitleBaner, SectionBaner, TitleSpan } from './styles'
import { CardPlano } from '../../components/CardPlano'
import { ButtonAction } from '../../components/Button/index'

import Heart from '../../assets/heart_0.svg'
import HomeImage from '../../assets/home.svg'
import Build from '../../assets/build.svg'
import AccountGroup from '../../assets/account-group-outline.svg'
import Marker from '../../assets/map-marker-outline.svg'
import Hospital from '../../assets/hospital-building.svg'
import HomeGroup from '../../assets/home-group-plus.svg'
import Briefcase from '../../assets/briefcase.svg'
import Flask from '../../assets/flask-outline.svg'
import Charity from '../../assets/charity.svg'
import GamePad from '../../assets/gamepad.svg'
import Tooth from '../../assets/tooth-outline.svg'
import BackGroundGirl from '../../assets/background-girl.jpeg'
import { SectionDefault } from '../../components/SectionDefault'
import { useTheme } from 'styled-components'
import { CardNumbers } from '../../components/CardNumbers'
import { YoutubeEmbed } from '../../components/YoutubeEmbed'

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

const numbers = [
  {
    image: AccountGroup,
    title: '+15 Milhões',
    subtitle: 'Clientes',
  },
  {
    image: Marker,
    title: '18 Estados',
    subtitle: 'com Rede Própria',
  },
  {
    image: Hospital,
    title: '87 Hospitais',
    subtitle: 'Disponíveis',
  },
  {
    image: HomeGroup,
    title: '77 Pronto',
    subtitle: 'Atendimentos',
  },
  {
    image: Briefcase,
    title: '318 Centros',
    subtitle: 'Clínicos',
  },
  {
    image: Flask,
    title: '269 Unidades',
    subtitle: 'de Diagnóstico',
  },
  {
    image: Charity,
    title: '+68 Mil',
    subtitle: 'Colaboradores',
  },
  {
    image: GamePad,
    title: '+27 Mil',
    subtitle: 'Médicos',
  },
  {
    image: Tooth,
    title: '+33 Mil',
    subtitle: 'Dentistas',
  },
]
export function Home() {
  const { colors } = useTheme()
  // const opts = {
  //   height: '480',
  //   width: '853',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // }
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
      <SectionDefault
        background={colors.bgGray}
        borderColor="secondary"
        title="Conheça nossos planos:"
        subtitle="Planos para você e sua família."
      >
        <CardList>
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
        </CardList>
      </SectionDefault>
      <SectionDefault
        background="#fff"
        borderColor="primary"
        title="Hapvida + NotreDame Intermédica juntas oferecem:"
      >
        <CardNumberList>
          {numbers.map((num) => (
            <CardNumbers
              key={num.title}
              image={num.image}
              title={num.title}
              subtitle={num.subtitle}
            />
          ))}
        </CardNumberList>
        <TitleVideo>Hapvida NotreDame Intermédica</TitleVideo>
        <SubTitleVideo>
          Mais saúde de qualidade, mais perto de você
        </SubTitleVideo>
        {/* <YouTube videoId="C4SEdvV7TxI" opts={opts} style={{ marginTop: 16 }} /> */}
        <br />
        <YoutubeEmbed videoId="C4SEdvV7TxI" />
      </SectionDefault>
      <SectionDefault backgroundImage={BackGroundGirl}>
        <SectionBaner>
          <TitleBaner><TitleSpan>Faça uma cotação</TitleSpan> e descubra como podemos ajudar você ou sua empresa a ter uma saúde de qualidade a preços acessíveis</TitleBaner>               
        </SectionBaner>
        <ButtonAction tittle="Solicitar proposta"/>
      </SectionDefault>
    </>
  )
}
