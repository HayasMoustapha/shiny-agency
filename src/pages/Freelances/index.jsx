import styled from 'styled-components'
import Card from '../../components/Card'
import DefaultPicture from '../../assets/profile.png'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'Alexandra Dupont',
    jobTitle: 'Développeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeur backend',
    picture: DefaultPicture,
  },
  {
    name: 'Lauren Ipsum',
    jobTitle: 'UX Designer',
    picture: DefaultPicture,
  },
]

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
  color: #2F2E41;
  margin-bottom: 50px;
`

const H4 = styled.h4`
  font-size: 20px;
  line-height: 133%;
  letter-spacing: 0%;
  font-weight: 700;
  color: #8186A0;
`

const Freelances = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <H1>Trouvez votre prestataire</H1>
        <H4>Chez Shiny nous reunissons les meilleurs profils pour vous</H4>
      </TitleContainer>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            jobTitle={profile.jobTitle}
            picture={profile.picture}
            name={profile.name}
          />
        ))}
      </CardsContainer>
    </MainContainer>
  )
}

export default Freelances
