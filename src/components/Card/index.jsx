import styled from 'styled-components'
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  line-height: 100%;
  font-weight: 400;
`

const CardName = styled.span`
  color: black;
  font-size: 22px;
  font-weight: 400;
  align-self: center;
`

const CardImage = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 50%;
  align-self: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  background-color: #f9f9fc;
  border-radius: 30px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e2e2;
  }
`;

const Card = ({ jobTitle, name, picture }) => {
  return (
    <CardWrapper>
      <CardLabel>{jobTitle}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardName>{name}</CardName>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: "'Freelance'",
  title: '',
  picture: DefaultPicture,
}

export default Card
