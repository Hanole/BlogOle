import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const categories = [
    {
      "id": 1,
      "title": "Men",
      "imageUrl": "https://images.unsplash.com/photo-1613053340702-e6df1fb10b34?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "direct": 'men'
    },
    {
      "id": 2,
      "title": "Women",
      "imageUrl": "https://images.unsplash.com/photo-1759229874914-c1ffdb3ebd0c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "direct": 'women'
    },
    {
      "id": 3,
      "title": "Barn",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1693242804074-20a78966f4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBraWR8ZW58MHx8MHx8fDA%3D",
      "direct": 'barn'
    },
    {
      "id": 4,
      "title": "New arrivals",
      "imageUrl": "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "direct": 'new-arrivals'
    },
    {
      "id": 5,
      "title": "Collections",
      "imageUrl": "https://images.pexels.com/photos/6627106/pexels-photo-6627106.jpeg",
      "direct": 'collections'
    },
    {
      "id": 6,
      "title": "About us",
      "imageUrl": "https://images.pexels.com/photos/5418897/pexels-photo-5418897.jpeg",
      "direct": 'about-us'
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