import { StyledLink } from '../../utils/style/Atoms.jsx'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'
import homeIllustration from '../../assets/home-illustration.svg'

const HomeContainer = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
 background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  margin: 30px;
  padding: 60px 90px;
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const Title = styled.h1`
  width: 552px;
  font-size: 50px;
  line-height: 161%;
  font-weight: 700;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Illustration = styled.img`
  flex: 1;
`

const Home = () => {

  const { theme } = useTheme()

  return (
    <HomeContainer theme={theme}>
      <LeftCol>
        <Title theme={theme}>
          Recupérer vos besoins, on s'occupe du reste, avec les meilleurs
          talents
        </Title>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </LeftCol>
      <Illustration src={homeIllustration} alt="Home illustration" />
    </HomeContainer>
  )
}

export default Home
