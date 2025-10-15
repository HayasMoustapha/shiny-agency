import { StyledLink } from '../../utils/style/Atoms.jsx'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 100px;
`
const Image = styled.img`
  height: 70px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Image src={logo} alt="Header logo" />
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/profils">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </HeaderContainer>
  )
}

export default Header
