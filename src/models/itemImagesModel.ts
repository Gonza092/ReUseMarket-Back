import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";

class ItemImages extends Model {
  public image_id!: number;
  public image_url!: string;
}

ItemImages.init(
  {
    image_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image_url: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ItemImage",
    tableName: "ItemImages",
  }
);

export default ItemImages;
