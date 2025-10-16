import { StyledLink } from '../../utils/style/Atoms.jsx'
import styled from 'styled-components'
import logo from '../../assets/dark-logo.png'

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
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
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </HeaderContainer>
  )
}

export default Header
