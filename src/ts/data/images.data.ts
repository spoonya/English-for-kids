export default class ImagesData {
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
}
