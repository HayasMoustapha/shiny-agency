import { Link } from 'react-router-dom'
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


const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
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
