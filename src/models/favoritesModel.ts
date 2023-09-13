import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";

class Favorites extends Model {
  public favorite_id!: number;
}

Favorites.init(
  {
    favorite_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    modelName: "Favorite",
    tableName: "Favorites",
  }
);

export default Favorites;
