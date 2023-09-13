import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";

class Messages extends Model {
  public message_id!: number;
  public message!: string;
  public viewed!: boolean;
}

Messages.init(
  {
    message_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    viewed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Message",
    tableName: "Messages",
  }
);

export default Messages;
