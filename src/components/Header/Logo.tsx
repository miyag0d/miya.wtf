import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const LogoWrapper = styled.div`
  margin: 1rem 0;
  img {
    width: 100%;
    max-width: 500px;
    padding: 0;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding:1rem;
  `}
`

export default function Logo({ source }: { source: string }) {
  return (
    <LogoWrapper>
      <Link to="/">
        <img
          src={source}
          alt="miya.wtf"
          width={500}
          height={175}
          style={{ minHeight: '175px', height: 'auto' }}
          loading="eager"
        />
      </Link>
    </LogoWrapper>
  )
}
