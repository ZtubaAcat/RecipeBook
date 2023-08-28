export class Recipe {
  public name: String;
  public description: String;
  public imgPath: String;

  constructor(name: String, desc: String, imgPath: String) {
    this.name = name;
    this.description = desc;
    this.imgPath = imgPath;
  }
}
