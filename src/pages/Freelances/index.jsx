import styled from 'styled-components'
import Card from '../../components/Card'
import { Loader } from '../../utils/style/Atoms'
import { useState, useEffect } from 'react'
import { useTheme } from '../../utils/hooks'

const MainContainer = styled.div`
  margin-bottom: 50px;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 50px;
  width: fit-content;
  grid-template-rows: 340px 335px;
  grid-template-columns: 340px 335px;
  margin: 0 auto;
`

const TitleContainer = styled.div`
  width: 560px;
  text-align: center;
  margin: 50px auto;
`

const H1 = styled.h1`
  font-size: 30px;
  line-height: 133%;
  letter-spacing: 0%;
  font-weight: 700;
   color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  margin-bottom: 50px;
`

const H4 = styled.h4`
  font-size: 20px;
  line-height: 133%;
  letter-spacing: 0%;
  font-weight: 700;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Freelances = () => {
  const { theme } = useTheme()
  const [freelancersList, setFreelancersList] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    async function fetchfreelancersList() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList} = await response.json()
        setFreelancersList(freelancersList)
        setDataLoading(false)
      } catch (error) {
        console.log('===== error =====', error)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchfreelancersList()
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <MainContainer>
      <TitleContainer>
        <H1 theme={theme}>Trouvez votre prestataire</H1>
        <H4 theme={theme}>Chez Shiny nous reunissons les meilleurs profils pour vous</H4>
      </TitleContainer>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              job={profile.job}
              picture={profile.picture}
              name={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </MainContainer>
  )
}

export default Freelances
