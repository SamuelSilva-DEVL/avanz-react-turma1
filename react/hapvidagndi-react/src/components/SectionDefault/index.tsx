import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'
import { Section, SectionContent, SubTitle, Title } from './styles'

interface SectionDefaultProps {
  title?: string
  subtitle?: string
  borderColor?: 'primary' | 'secondary'
  children: ReactNode
  background?: string
  backgroundImage?: string
  style?: CSSProperties
}

export function SectionDefault({
  title,
  subtitle,
  borderColor = 'primary',
  children,
  background = '#fff',
  backgroundImage,
  style,
}: SectionDefaultProps) {
  return (
    <Section
      borderColor={borderColor}
      background={background}
      backgroundImage={backgroundImage}
      style={style}
    >
      <SectionContent>
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        {children}
      </SectionContent>
    </Section>
  )
}
