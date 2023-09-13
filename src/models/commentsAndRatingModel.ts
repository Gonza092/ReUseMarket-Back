import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";

class CommentsAndRating extends Model {
  public comment_id!: number;
  public receiver_id!: number;
  public comment!: string;
  public rating!: number;
}

CommentsAndRating.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    receiver_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "user_id",
      },
      unique: true,
    },
    comment: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
        isInt: true,
      },
    },
  },
  {
    sequelize,
    modelName: "CommentsAndRating",
    tableName: "CommentsAndRating",
  }
);

export default CommentsAndRating;
