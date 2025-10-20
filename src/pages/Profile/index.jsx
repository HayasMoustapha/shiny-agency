import { Component } from 'react'
import './index.css'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileData: {},
        }
    }

    componentDidMount() {
        const { id } = this.props

        fetch(`http://localhost:8000/freelance?id=${id}`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({ profileData: jsonResponse?.freelanceData })
            })
    }

    render() {
        const { profileData } = this.state
        const {
            picture,
            name,
            location,
            tjm,
            job,
            skills,
            available,
            id,
        } = profileData

        return (
            <div className='profile-container'>
                <img src={picture} alt={name} height={150} width={150} className='profile-image'/>
                <h1 className='profile-name'>{name}</h1>
                <span className="profile-location">{location}</span>
                <h2 className='profile-job'>{job}</h2>
                <div className='profile-skills-container'>
                    {skills &&
                        skills.map((skill) => (
                            <div key={`skill-${skill}-${id}`} className='profile-skill'>{skill}</div>
                        ))}
                </div>
                <div className='profile-available'>{available ? 'Disponible maintenant' : 'Indisponible'}</div>

                <span className="profile-tjm">{tjm} € / jour</span>
            </div>
        )
    }
}

export default Profile