import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";
import Item from "./itemModel";

class User extends Model {
  public user_id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public avatar!: string | null;
  public bio!: string | null;
  public role!: "admin" | "user";
  public verification_code!: string | null;
  public verified_at!: Date | null;
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(50),
    },
    bio: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
    recover_pass_code: {
      type: DataTypes.STRING(64),
    },
    verification_code: {
      type: DataTypes.STRING(64),
    },
    verified_at: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "Users",
  }
);

User.hasMany(Item, {
  foreignKey: "user_id",
  sourceKey: "user_id",
});

// Item.belongsTo(User, {
//   foreignKey: "item_id",
//   targetKey: "item_id",
// });

export default User;
