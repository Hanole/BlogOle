import './category-item.styles.scss'
import { Link } from 'react-router';


const CategoryItem = ({ category }) => {
    const { imageUrl, title, direct } = category;
    return (
        <div className='category-container'>
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />
            <div className='category-body-container'>
            <Link to={direct}>
                <h2>{title}</h2>
            </Link>
            </div>
      </div>
    )

}

export default CategoryItem