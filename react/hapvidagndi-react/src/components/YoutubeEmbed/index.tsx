import { YoutubeContainer, YoutubeIframe } from './styles'

interface YoutubeEmbedProps {
  videoId: string
}

export function YoutubeEmbed({ videoId }: YoutubeEmbedProps) {
  return (
    <YoutubeContainer>
      <YoutubeIframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </YoutubeContainer>
  )
}
