import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";

class Item extends Model {
  public item_id!: number;
  public title!: string;
  public description!: string | null;
  public price!: number;
  public location_id!: number | null;
  public category_id!: number | null;
  public seller_id!: number | null;
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
    // location_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Locations",
    //     key: "location_id",
    //   },
    // },
    // category_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Categories",
    //     key: "category_id",
    //   },
    // },
    // seller_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Users",
    //     key: "user_id",
    //   },
    // },
  },
  {
    sequelize,
    modelName: "Item",
    tableName: "Items",
  }
);

export default Item;
