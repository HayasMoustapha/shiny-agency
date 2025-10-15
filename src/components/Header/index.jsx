import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey">Questionnaire</Link>
      <Link to="/results">Resultats</Link>
      <Link to="/freelances">Free-Lances</Link>
    </nav>
  )
}

export default Header
