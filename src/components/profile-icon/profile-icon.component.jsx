import './profile-icon.styles.scss';
import { ReactComponent as IconProfile } from '../../assets/profile-icon.svg';



const ProfileIcon = () => {
    return (
        <div className='profile-icon-container'>
            <IconProfile className='icon-profile' />
        </div>
    ) 
}



export default ProfileIcon;