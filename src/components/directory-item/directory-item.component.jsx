import './directory-item.styles.scss'
import { Link } from 'react-router';


const DirectoryItem = ({ category }) => {
    const { imageUrl, title, direct } = category;
    return (
        <div className='directory-item-container'>
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />
            <div className='directory-item-body'>
            <Link to={direct}>
                <h2>{title}</h2>
            </Link>
            </div>
      </div>
    )

}

export default DirectoryItem;