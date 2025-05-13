import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const categories = [
    {
      "id": 1,
      "title": "Shop",
      "imageUrl": "https://images.pexels.com/photos/3777876/pexels-photo-3777876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "direct": 'shop'
    },
    {
      "id": 2,
      "title": "Books",
      "imageUrl": "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "direct": 'books'
    },
    {
      "id": 3,
      "title": "Films and TV",
      "imageUrl": "https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "direct": 'films-and-tv'
    },
    {
      "id": 4,
      "title": "Philosophy",
      "imageUrl": "https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "direct": 'philosophy'
    },
    {
      "id": 5,
      "title": "Music",
      "imageUrl": "https://images.pexels.com/photos/1436141/pexels-photo-1436141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "direct": 'music'
    },
    {
      "id": 6,
      "title": "Hanole & Friends",
      "imageUrl": "https://images.pexels.com/photos/3348489/pexels-photo-3348489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "direct": 'friends'
    }
  ]

const Directory = () => {
  
  return (
    <div className='directory-container'>
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
    </div>
  );
}

export default Directory;