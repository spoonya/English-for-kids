import AssetsData from './assets.data';

const images = new AssetsData().importImages();
const sounds = new AssetsData().importCardSounds();

const CARDS_DATA: any = {
  actions: [
    {
      word: 'read',
      translation: 'читать',
      img: images.actions['read.jpg'],
      audioSrc: sounds.actions['read.mp3'],
    },
    {
      word: 'dance',
      translation: 'танцевать',
      img: images.actions['dance.jpg'],
      audioSrc: sounds.actions['dance.mp3'],
    },
    {
      word: 'draw',
      translation: 'рисовать',
      img: images.actions['draw.jpg'],
      audioSrc: sounds.actions['draw.mp3'],
    },
    {
      word: 'fly',
      translation: 'летать',
      img: images.actions['fly.jpg'],
      audioSrc: sounds.actions['fly.mp3'],
    },
    {
      word: 'hug',
      translation: 'обнимать',
      img: images.actions['hug.jpg'],
      audioSrc: sounds.actions['hug.mp3'],
    },
    {
      word: 'jump',
      translation: 'прыгать',
      img: images.actions['jump.jpg'],
      audioSrc: sounds.actions['jump.mp3'],
    },
    {
      word: 'walk',
      translation: 'ходить',
      img: images.actions['walk.jpg'],
      audioSrc: sounds.actions['walk.mp3'],
    },
    {
      word: 'run',
      translation: 'бегать',
      img: images.actions['run.jpg'],
      audioSrc: sounds.actions['run.mp3'],
    },
  ],
  animals: [
    {
      word: 'bird',
      translation: 'птица',
      img: images.animals['bird.jpg'],
      audioSrc: sounds.animals['bird.mp3'],
    },
    {
      word: 'cat',
      translation: 'кот',
      img: images.animals['cat.jpg'],
      audioSrc: sounds.animals['cat.mp3'],
    },
    {
      word: 'dog',
      translation: 'собака',
      img: images.animals['dog.jpg'],
      audioSrc: sounds.animals['dog.mp3'],
    },
    {
      word: 'chicken',
      translation: 'курица',
      img: images.animals['chicken.jpg'],
      audioSrc: sounds.animals['chicken.mp3'],
    },
    {
      word: 'mice',
      translation: 'мышь',
      img: images.animals['mice.jpg'],
      audioSrc: sounds.animals['mice.mp3'],
    },
    {
      word: 'cow',
      translation: 'корова',
      img: images.animals['cow.jpg'],
      audioSrc: sounds.animals['cow.mp3'],
    },
    {
      word: 'fish',
      translation: 'рыба',
      img: images.animals['fish.jpg'],
      audioSrc: sounds.animals['fish.mp3'],
    },
    {
      word: 'horse',
      translation: 'лошадь',
      img: images.animals['horse.jpg'],
      audioSrc: sounds.animals['horse.mp3'],
    },
  ],
  body: [
    {
      word: 'ear',
      translation: 'ухо',
      img: images.body['ear.jpg'],
      audioSrc: sounds.body['ear.mp3'],
    },
    {
      word: 'eye',
      translation: 'глаз',
      img: images.body['eye.jpg'],
      audioSrc: sounds.body['eye.mp3'],
    },
    {
      word: 'hair',
      translation: 'вылосы',
      img: images.body['hair.jpg'],
      audioSrc: sounds.body['hair.mp3'],
    },
    {
      word: 'hand',
      translation: 'рука',
      img: images.body['hand.jpg'],
      audioSrc: sounds.body['hand.mp3'],
    },
    {
      word: 'head',
      translation: 'голова',
      img: images.body['head.jpg'],
      audioSrc: sounds.body['head.mp3'],
    },
    {
      word: 'mouth',
      translation: 'рот',
      img: images.body['mouth.jpg'],
      audioSrc: sounds.body['mouth.mp3'],
    },
    {
      word: 'neck',
      translation: 'шея',
      img: images.body['neck.jpg'],
      audioSrc: sounds.body['neck.mp3'],
    },
    {
      word: 'nose',
      translation: 'нос',
      img: images.body['nose.jpg'],
      audioSrc: sounds.body['nose.mp3'],
    },
  ],
  clothes: [
    {
      word: 'sweater',
      translation: 'свитер',
      img: images.clothes['sweater.jpg'],
      audioSrc: sounds.clothes['sweater.mp3'],
    },
    {
      word: 'hat',
      translation: 'шляпа',
      img: images.clothes['hat.jpg'],
      audioSrc: sounds.clothes['hat.mp3'],
    },
    {
      word: 'pants',
      translation: 'штаны',
      img: images.clothes['pants.jpg'],
      audioSrc: sounds.clothes['pants.mp3'],
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      img: images.clothes['shirt.jpg'],
      audioSrc: sounds.clothes['shirt.mp3'],
    },
    {
      word: 't-shirt',
      translation: 'футболка',
      img: images.clothes['t-shirt.jpg'],
      audioSrc: sounds.clothes['t-shirt.mp3'],
    },
    {
      word: 'shoe',
      translation: 'обувь',
      img: images.clothes['shoe.jpg'],
      audioSrc: sounds.clothes['shoe.mp3'],
    },
    {
      word: 'shorts',
      translation: 'шорты',
      img: images.clothes['shorts.jpg'],
      audioSrc: sounds.clothes['shorts.mp3'],
    },
    {
      word: 'sock',
      translation: 'носок',
      img: images.clothes['sock.jpg'],
      audioSrc: sounds.clothes['sock.mp3'],
    },
  ],
  emotions: [
    {
      word: 'angry',
      translation: 'злой',
      img: images.emotions['angry.jpg'],
      audioSrc: sounds.emotions['angry.mp3'],
    },
    {
      word: 'happy',
      translation: 'счастливый',
      img: images.emotions['happy.jpg'],
      audioSrc: sounds.emotions['happy.mp3'],
    },
    {
      word: 'sleepy',
      translation: 'сонный',
      img: images.emotions['sleepy.jpg'],
      audioSrc: sounds.emotions['sleepy.mp3'],
    },
    {
      word: 'sad',
      translation: 'грустный',
      img: images.emotions['sad.jpg'],
      audioSrc: sounds.emotions['sad.mp3'],
    },
    {
      word: 'scared',
      translation: 'испуганный',
      img: images.emotions['scared.jpg'],
      audioSrc: sounds.emotions['scared.mp3'],
    },
    {
      word: 'nervous',
      translation: 'нервный',
      img: images.emotions['nervous.jpg'],
      audioSrc: sounds.emotions['nervous.mp3'],
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      img: images.emotions['surprised.jpg'],
      audioSrc: sounds.emotions['surprised.mp3'],
    },
    {
      word: 'tired',
      translation: 'уставший',
      img: images.emotions['tired.jpg'],
      audioSrc: sounds.emotions['tired.mp3'],
    },
  ],
  food: [
    {
      word: 'apple',
      translation: 'яблоко',
      img: images.food['apple.jpg'],
      audioSrc: sounds.food['apple.mp3'],
    },
    {
      word: 'banana',
      translation: 'банан',
      img: images.food['banana.jpg'],
      audioSrc: sounds.food['banana.mp3'],
    },
    {
      word: 'bread',
      translation: 'хлеб',
      img: images.food['bread.jpg'],
      audioSrc: sounds.food['bread.mp3'],
    },
    {
      word: 'cake',
      translation: 'торт',
      img: images.food['cake.jpg'],
      audioSrc: sounds.food['cake.mp3'],
    },
    {
      word: 'cheese',
      translation: 'сыр',
      img: images.food['cheese.jpg'],
      audioSrc: sounds.food['cheese.mp3'],
    },
    {
      word: 'egg',
      translation: 'яйцо',
      img: images.food['egg.jpg'],
      audioSrc: sounds.food['egg.mp3'],
    },
    {
      word: 'milk',
      translation: 'молоко',
      img: images.food['milk.jpg'],
      audioSrc: sounds.food['milk.mp3'],
    },
    {
      word: 'potato',
      translation: 'картофель',
      img: images.food['potato.jpg'],
      audioSrc: sounds.food['potato.mp3'],
    },
  ],
  home: [
    {
      word: 'bathroom',
      translation: 'ванная',
      img: images.home['bathroom.jpg'],
      audioSrc: sounds.home['bathroom.mp3'],
    },
    {
      word: 'bed',
      translation: 'кровать',
      img: images.home['bed.jpg'],
      audioSrc: sounds.home['bed.mp3'],
    },
    {
      word: 'bedroom',
      translation: 'спальня',
      img: images.home['bedroom.jpg'],
      audioSrc: sounds.home['bedroom.mp3'],
    },
    {
      word: 'chair',
      translation: 'стул',
      img: images.home['chair.jpg'],
      audioSrc: sounds.home['chair.mp3'],
    },
    {
      word: 'kitchen',
      translation: 'кухня',
      img: images.home['kitchen.jpg'],
      audioSrc: sounds.home['kitchen.mp3'],
    },
    {
      word: 'mirror',
      translation: 'зеркало',
      img: images.home['mirror.jpg'],
      audioSrc: sounds.home['mirror.mp3'],
    },
    {
      word: 'toilet',
      translation: 'туалет',
      img: images.home['toilet.jpg'],
      audioSrc: sounds.home['toilet.mp3'],
    },
    {
      word: 'window',
      translation: 'окно',
      img: images.home['window.jpg'],
      audioSrc: sounds.home['window.mp3'],
    },
  ],
  nature: [
    {
      word: 'beach',
      translation: 'пляж',
      img: images.nature['beach.jpg'],
      audioSrc: sounds.nature['beach.mp3'],
    },
    {
      word: 'desert',
      translation: 'пустыня',
      img: images.nature['desert.jpg'],
      audioSrc: sounds.nature['desert.mp3'],
    },
    {
      word: 'forest',
      translation: 'лес',
      img: images.nature['forest.jpg'],
      audioSrc: sounds.nature['forest.mp3'],
    },
    {
      word: 'island',
      translation: 'остров',
      img: images.nature['island.jpg'],
      audioSrc: sounds.nature['island.mp3'],
    },
    {
      word: 'lake',
      translation: 'озеро',
      img: images.nature['lake.jpg'],
      audioSrc: sounds.nature['lake.mp3'],
    },
    {
      word: 'river',
      translation: 'река',
      img: images.nature['river.jpg'],
      audioSrc: sounds.nature['river.mp3'],
    },
    {
      word: 'sea',
      translation: 'море',
      img: images.nature['sea.jpg'],
      audioSrc: sounds.nature['sea.mp3'],
    },
    {
      word: 'volcano',
      translation: 'вулкан',
      img: images.nature['volcano.jpg'],
      audioSrc: sounds.nature['volcano.mp3'],
    },
  ],
};

export default CARDS_DATA;
