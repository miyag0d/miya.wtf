import Nun from 'assets/nun.jpg?preset=banner&resize=true'
import styled from 'styled-components/macro'

import { BorderContainer } from '@/theme/common'

const HeroImage = styled.img`
  max-width: 500px;
  padding: 0;
`

export default function Hero() {
  return (
    <BorderContainer>
      <HeroImage src={Nun[0]?.src} width={500} height={300} />
    </BorderContainer>
  )
}
