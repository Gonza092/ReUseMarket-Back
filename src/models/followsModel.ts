import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";

class Follows extends Model {
  public follow_id!: number;
}

Follows.init(
  {
    follow_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    modelName: "Follow",
    tableName: "Follows",
  }
);

export default Follows;
