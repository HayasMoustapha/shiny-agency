import { StyledLink } from '../../utils/style/Atoms.jsx'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import homeIllustration from '../../assets/home-illustration.svg'

const HomeContainer = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${colors.backgroundLight};
  margin: 50px auto 0px auto;
  padding: 90px 50px;
`
const LeftCol = styled.div`
  display: flex,
`

const Title = styled.h1`
  width: 552px;
  font-size: 50px;
  line-height: 161%;
  font-weight: 700;
  margin: 70px auto 55px auto;
  color: ${colors.dark};
`

const Illustration = styled.img`
  width: 541px;
  height: auto;
  margin-top: 25px;
`

const Home = () => {
  return (
    <HomeContainer>
      <LeftCol>
        <Title>
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
