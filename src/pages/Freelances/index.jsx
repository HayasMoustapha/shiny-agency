import styled from "styled-components";

import Card from "../../components/Card";
import DefaultPicture from "../../assets/profile.png"


const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Développeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeur backend',
    picture: DefaultPicture,
  },
]

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const Freelances = () => {
  return (
    <CardsContainer>
      <h1>Freelances 👩·💻👨·💻👩·💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </CardsContainer>
  )
}

export default Freelances
