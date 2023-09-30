import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";
import ItemImages from "./itemImagesModel";
import Favorites from "./favoritesModel";

class Item extends Model {
  public item_id!: number;
  public title!: string;
  public description!: string | null;
  public price!: number;
  public category!:
    | "electronic"
    | "engine"
    | "books"
    | "clothes"
    | "inmobilary"
    | "sport"
    | "House and garden"
    | "other";
  public seller_id!: number;
}

Item.init(
  {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(
        "electronic",
        "engine",
        "books",
        "clothes",
        "inmobilary",
        "sport",
        "House and garden",
        "other"
      ),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Item",
    tableName: "Items",
  }
);

Item.hasMany(ItemImages, {
  foreignKey: "item_id",
  sourceKey: "item_id",
  onDelete: "CASCADE",
});

Item.hasMany(Favorites, { foreignKey: "item_id", as: "item" });

export default Item;
