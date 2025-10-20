import { useParams } from 'react-router-dom'
import Profile from '../../pages/Profile'

const ProfileContainer = () => {
    const { id } = useParams()
    return (
        <div>
            <Profile id={id} />
        </div>
    )
}

export default ProfileContainer