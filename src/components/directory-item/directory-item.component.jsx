import { useNavigate } from 'react-router';

import { DirectoryItemContainer, Body, BackgroundImage } from './directory-item.styles'
import { Link } from 'react-router';


const DirectoryItem = ({ category }) => {
    const { imageUrl, title, direct } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(direct);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage 
                imageUrl={imageUrl}
            />
            <Body>
            <Link to={direct}>
                <h2>{title}</h2>
            </Link>
            </Body>
      </DirectoryItemContainer>
    )

}

export default DirectoryItem;