import PropTypes from 'prop-types'
import { Component } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/profile.png'

const Cardjob = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false,
    }
  }

  setFavorite = () => {
    this.setState({ isFavorite: !this.state.isFavorite })
  }

  render() {
    const { theme, picture, job, name } = this.props
    const { isFavorite } = this.state
    const star = isFavorite ? '⭐️' : ''

    return (
      <CardWrapper theme={theme} onClick={this.setFavorite}>
        <Cardjob theme={theme}>{job}</Cardjob>
        <CardImage src={picture} alt="freelance" />
        <CardTitle theme={theme}>
          {star} {name} {star}
        </CardTitle>
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  job: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

Card.defaultProps = {
  job: '',
  title: '',
  picture: DefaultPicture,
  theme: 'light',
}

export default Card