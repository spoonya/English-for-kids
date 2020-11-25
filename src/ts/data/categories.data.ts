import ImagesData from './images.data';

const images = new ImagesData().importImages();

const CATEGORIES = [
  {
    title: 'Actions',
    img: images.categories['actions.jpg'],
    id: 'actions',
  },
  {
    title: 'Animals',
    img: images.categories['animals.jpg'],
    id: 'animals',
  },
  {
    title: 'Body',
    img: images.categories['body.jpg'],
    id: 'body',
  },
  {
    title: 'Clothes',
    img: images.categories['clothes.jpg'],
    id: 'clothes',
  },
  {
    title: 'Emotions',
    img: images.categories['emotions.jpg'],
    id: 'emotions',
  },
  {
    title: 'Food',
    img: images.categories['food.jpg'],
    id: 'food',
  },
  {
    title: 'Home',
    img: images.categories['home.jpg'],
    id: 'home',
  },
  {
    title: 'Nature',
    img: images.categories['nature.jpg'],
    id: 'nature',
  },
];

export default CATEGORIES;
