import styled from 'styled-components/macro'

import { BorderContainer } from '@/theme/common'

const HeroImage = styled.img`
  max-width: 500px;
  padding: 0;
`

export default function Hero() {
  return (
    <BorderContainer>
      <HeroImage src="images/nun.jpg" />
    </BorderContainer>
  )
}
