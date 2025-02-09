import './App.css';
import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "Arts and crafts",
      "imageUrl": "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 2,
      "title": "Bookreviews",
      "imageUrl": "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 3,
      "title": "Films and TV",
      "imageUrl": "https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 4,
      "title": "Philosophy",
      "imageUrl": "https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 5,
      "title": "Music",
      "imageUrl": "https://images.pexels.com/photos/1436141/pexels-photo-1436141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 6,
      "title": "Hanole & Friends",
      "imageUrl": "https://images.pexels.com/photos/3348489/pexels-photo-3348489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
   <Directory categories={categories} />
  );
};

export default App;
