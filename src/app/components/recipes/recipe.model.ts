import { Ingredient } from '../../ingredient.model';
export class Recipe {
  public name: String;
  public description: String;
  public imgPath: String;
  public Ingredient: any[] = [];

  constructor(name: String, desc: String, imgPath: String) {
    this.name = name;
    this.description = desc;
    this.imgPath = imgPath;
  }
}
