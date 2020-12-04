export default class AssetsData {
  private importAll = (require: any): any =>
    require.keys().reduce((acc: any, next: any) => {
      // eslint-disable-next-line import/no-dynamic-require
      acc[next.replace('./', '')] = require(next);
      return acc;
    }, {});

  public importImages = (): any => {
    return {
      actions: this.importAll(require.context('../../assets/img/actions', false, /\.(png|jpe?g|svg|gif)$/)),
      animals: this.importAll(require.context('../../assets/img/animals', false, /\.(png|jpe?g|svg|gif)$/)),
      body: this.importAll(require.context('../../assets/img/body', false, /\.(png|jpe?g|svg|gif)$/)),
      categories: this.importAll(require.context('../../assets/img/categories', false, /\.(png|jpe?g|svg|gif)$/)),
      clothes: this.importAll(require.context('../../assets/img/clothes', false, /\.(png|jpe?g|svg|gif)$/)),
      emotions: this.importAll(require.context('../../assets/img/emotions', false, /\.(png|jpe?g|svg|gif)$/)),
      food: this.importAll(require.context('../../assets/img/food', false, /\.(png|jpe?g|svg|gif)$/)),
      home: this.importAll(require.context('../../assets/img/home', false, /\.(png|jpe?g|svg|gif)$/)),
      nature: this.importAll(require.context('../../assets/img/nature', false, /\.(png|jpe?g|svg|gif)$/)),
    };
  };

  public importCardSounds = (): any => {
    return {
      actions: this.importAll(require.context('../../assets/audio/actions', false, /\.(ogg|mp3|wav|mpe?g)$/)),
      animals: this.importAll(require.context('../../assets/audio/animals', false, /\.(ogg|mp3|wav|mpe?g)$/)),
      body: this.importAll(require.context('../../assets/audio/body', false, /\.(ogg|mp3|wav|mpe?g)$/)),
      clothes: this.importAll(require.context('../../assets/audio/clothes', false, /\.(ogg|mp3|wav|mpe?g)$/)),
      emotions: this.importAll(require.context('../../assets/audio/emotions', false, /\.(ogg|mp3|wav|mpe?g)$/)),
      food: this.importAll(require.context('../../assets/audio/food', false, /\.(ogg|mp3|wav|mpe?g)$/)),
      home: this.importAll(require.context('../../assets/audio/home', false, /\.(ogg|mp3|wav|mpe?g)$/)),
      nature: this.importAll(require.context('../../assets/audio/nature', false, /\.(ogg|mp3|wav|mpe?g)$/)),
    };
  };

  public importGameSounds = (): any => {
    return {
      game: this.importAll(require.context('../../assets/audio/game', false, /\.(ogg|mp3|wav|mpe?g)$/)),
    };
  };
}
