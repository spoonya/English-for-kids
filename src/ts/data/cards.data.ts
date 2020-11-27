import ImagesData from './images.data';

const images = new ImagesData().importImages();

const CARDS: any = {
  actions: [
    {
      word: 'cry',
      translation: 'плакать',
      img: images.categories['actions.jpg'],
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      img: images.categories['animals.jpg'],
      audioSrc: 'audio/dance.mp3',
    },
    {
      word: 'cry',
      translation: 'плакать',
      img: images.categories['actions.jpg'],
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      img: images.categories['animals.jpg'],
      audioSrc: 'audio/dance.mp3',
    },
    {
      word: 'cry',
      translation: 'плакать',
      img: images.categories['actions.jpg'],
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      img: images.categories['animals.jpg'],
      audioSrc: 'audio/dance.mp3',
    },
  ],
  animals: [
    {
      word: 'cat',
      translation: 'кот',
      img: images.categories['actions.jpg'],
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      img: images.categories['actions.jpg'],
      audioSrc: 'audio/dance.mp3',
    },
  ],
};

// const CARDS: any[] = [
//   ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'],
//   [
//     {
//       word: 'cry',
//       translation: 'плакать',
//       img: 'img/cry.jpg',
//       audioSrc: 'audio/cry.mp3',
//     },
//     {
//       word: 'dance',
//       translation: 'танцевать',
//       img: 'img/dance.jpg',
//       audioSrc: 'audio/dance.mp3',
//     },

//   {
//     word: 'dive',
//     translation: 'нырять',
//     img: 'img/dive.jpg',
//     audioSrc: 'audio/dive.mp3',
//   },
//   {
//     word: 'draw',
//     translation: 'рисовать',
//     img: 'img/draw.jpg',
//     audioSrc: 'audio/draw.mp3',
//   },
//   {
//     word: 'fish',
//     translation: 'ловить рыбу',
//     img: 'img/fish.jpg',
//     audioSrc: 'audio/fish.mp3',
//   },
//   {
//     word: 'fly',
//     translation: 'летать',
//     img: 'img/fly.jpg',
//     audioSrc: 'audio/fly.mp3',
//   },
//   {
//     word: 'hug',
//     translation: 'обнимать',
//     img: 'img/hug.jpg',
//     audioSrc: 'audio/hug.mp3',
//   },
//   {
//     word: 'jump',
//     translation: 'прыгать',
//     img: 'img/jump.jpg',
//     audioSrc: 'audio/jump.mp3',
//   },
// ],
// [
//   {
//     word: 'open',
//     translation: 'открывать',
//     img: 'img/open.jpg',
//     audioSrc: 'audio/open.mp3',
//   },
//   {
//     word: 'play',
//     translation: 'играть',
//     img: 'img/play.jpg',
//     audioSrc: 'audio/play.mp3',
//   },
//   {
//     word: 'point',
//     translation: 'указывать',
//     img: 'img/point.jpg',
//     audioSrc: 'audio/point.mp3',
//   },
//   {
//     word: 'ride',
//     translation: 'ездить',
//     img: 'img/ride.jpg',
//     audioSrc: 'audio/ride.mp3',
//   },
//   {
//     word: 'run',
//     translation: 'бегать',
//     img: 'img/run.jpg',
//     audioSrc: 'audio/run.mp3',
//   },
//   {
//     word: 'sing',
//     translation: 'петь',
//     img: 'img/sing.jpg',
//     audioSrc: 'audio/sing.mp3',
//   },
//   {
//     word: 'skip',
//     translation: 'пропускать, прыгать',
//     img: 'img/skip.jpg',
//     audioSrc: 'audio/skip.mp3',
//   },
//   {
//     word: 'swim',
//     translation: 'плавать',
//     img: 'img/swim.jpg',
//     audioSrc: 'audio/swim.mp3',
//   },
// ],
// [
//   {
//     word: 'cat',
//     translation: 'кот',
//     img: 'img/cat.jpg',
//     audioSrc: 'audio/cat.mp3',
//   },
//   {
//     word: 'chick',
//     translation: 'цыплёнок',
//     img: 'img/chick.jpg',
//     audioSrc: 'audio/chick.mp3',
//   },
//   {
//     word: 'chicken',
//     translation: 'курица',
//     img: 'img/chicken.jpg',
//     audioSrc: 'audio/chicken.mp3',
//   },
//   {
//     word: 'dog',
//     translation: 'собака',
//     img: 'img/dog.jpg',
//     audioSrc: 'audio/dog.mp3',
//   },
//   {
//     word: 'horse',
//     translation: 'лошадь',
//     img: 'img/horse.jpg',
//     audioSrc: 'audio/horse.mp3',
//   },
//   {
//     word: 'pig',
//     translation: 'свинья',
//     img: 'img/pig.jpg',
//     audioSrc: 'audio/pig.mp3',
//   },
//   {
//     word: 'rabbit',
//     translation: 'кролик',
//     img: 'img/rabbit.jpg',
//     audioSrc: 'audio/rabbit.mp3',
//   },
//   {
//     word: 'sheep',
//     translation: 'овца',
//     img: 'img/sheep.jpg',
//     audioSrc: 'audio/sheep.mp3',
//   },
// ],
// [
//   {
//     word: 'bird',
//     translation: 'птица',
//     img: 'img/bird.jpg',
//     audioSrc: 'audio/bird.mp3',
//   },
//   {
//     word: 'fish',
//     translation: 'рыба',
//     img: 'img/fish1.jpg',
//     audioSrc: 'audio/fish.mp3',
//   },
//   {
//     word: 'frog',
//     translation: 'жаба',
//     img: 'img/frog.jpg',
//     audioSrc: 'audio/frog.mp3',
//   },
//   {
//     word: 'giraffe',
//     translation: 'жирафа',
//     img: 'img/giraffe.jpg',
//     audioSrc: 'audio/giraffe.mp3',
//   },
//   {
//     word: 'lion',
//     translation: 'лев',
//     img: 'img/lion.jpg',
//     audioSrc: 'audio/lion.mp3',
//   },
//   {
//     word: 'mouse',
//     translation: 'мышь',
//     img: 'img/mouse.jpg',
//     audioSrc: 'audio/mouse.mp3',
//   },
//   {
//     word: 'turtle',
//     translation: 'черепаха',
//     img: 'img/turtle.jpg',
//     audioSrc: 'audio/turtle.mp3',
//   },
//   {
//     word: 'dolphin',
//     translation: 'дельфин',
//     img: 'img/dolphin.jpg',
//     audioSrc: 'audio/dolphin.mp3',
//   },
// ],
// [
//   {
//     word: 'skirt',
//     translation: 'юбка',
//     img: 'img/skirt.jpg',
//     audioSrc: 'audio/skirt.mp3',
//   },
//   {
//     word: 'pants',
//     translation: 'брюки',
//     img: 'img/pants.jpg',
//     audioSrc: 'audio/pants.mp3',
//   },
//   {
//     word: 'blouse',
//     translation: 'блузка',
//     img: 'img/blouse.jpg',
//     audioSrc: 'audio/blouse.mp3',
//   },
//   {
//     word: 'dress',
//     translation: 'платье',
//     img: 'img/dress.jpg',
//     audioSrc: 'audio/dress.mp3',
//   },
//   {
//     word: 'boot',
//     translation: 'ботинок',
//     img: 'img/boot.jpg',
//     audioSrc: 'audio/boot.mp3',
//   },
//   {
//     word: 'shirt',
//     translation: 'рубашка',
//     img: 'img/shirt.jpg',
//     audioSrc: 'audio/shirt.mp3',
//   },
//   {
//     word: 'coat',
//     translation: 'пальто',
//     img: 'img/coat.jpg',
//     audioSrc: 'audio/coat.mp3',
//   },
//   {
//     word: 'shoe',
//     translation: 'туфли',
//     img: 'img/shoe.jpg',
//     audioSrc: 'audio/shoe.mp3',
//   },
// ],
// [
//   {
//     word: 'sad',
//     translation: 'грустный',
//     img: 'img/sad.jpg',
//     audioSrc: 'audio/sad.mp3',
//   },
//   {
//     word: 'angry',
//     translation: 'сердитый',
//     img: 'img/angry.jpg',
//     audioSrc: 'audio/angry.mp3',
//   },
//   {
//     word: 'happy',
//     translation: 'счастливый',
//     img: 'img/happy.jpg',
//     audioSrc: 'audio/happy.mp3',
//   },
//   {
//     word: 'tired',
//     translation: 'уставший',
//     img: 'img/tired.jpg',
//     audioSrc: 'audio/tired.mp3',
//   },
//   {
//     word: 'surprised',
//     translation: 'удивлённый',
//     img: 'img/surprised.jpg',
//     audioSrc: 'audio/surprised.mp3',
//   },
//   {
//     word: 'scared',
//     translation: 'испуганный',
//     img: 'img/scared.jpg',
//     audioSrc: 'audio/scared.mp3',
//   },
//   {
//     word: 'smile',
//     translation: 'улыбка',
//     img: 'img/smile.jpg',
//     audioSrc: 'audio/smile.mp3',
//   },
//   {
//     word: 'laugh',
//     translation: 'смех',
//     img: 'img/laugh.jpg',
//     audioSrc: 'audio/laugh.mp3',
//   },
// ],
// ];

export default CARDS;
