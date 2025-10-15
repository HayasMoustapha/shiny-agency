import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import homeIllustration from '../../assets/home-illustration.svg'

const HomeContainer = styled.div`
  width: 1400px;
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

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `display: block; color: white; border-radius: 30px; background-color: ${colors.primary}; width: 261px; height: auto;`}
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
