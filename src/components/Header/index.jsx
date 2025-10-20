import { Link } from 'react-router-dom'
import { StyledLink } from '../../utils/style/Atoms.jsx'
import styled from 'styled-components'
import LightLogo from '../../assets/light-logo.png'
import DarkLogo from '../../assets/dark-logo.png'
import { useTheme } from '../../utils/hooks'

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
const HomeLogo = styled.img`
  height: 70px;
`

const Header = () => {
  const { theme } = useTheme()
  return (
    <HeaderContainer>
      <Link to="/">
        <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
      </Link>
      <div>
        <StyledLink $theme={theme} to="/">
          Accueil
        </StyledLink>
        <StyledLink $theme={theme} to="/freelances">
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </HeaderContainer>
  )
}

export default Header
