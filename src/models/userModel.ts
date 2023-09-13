import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";
import Item from "./itemModel";
import Messages from "./messagesModel";
import Transaction from "./transactionsModel";
import Favorites from "./favoritesModel";
import Follows from "./followsModel";
import CommentsAndRating from "./commentsAndRatingModel";

class User extends Model {
  public user_id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public avatar!: string | null;
  public bio!: string | null;
  public province!: string | null;
  public role!: "admin" | "user";
  public recover_pass_code!: string | null;
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
    province: {
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
  foreignKey: "seller_id",
  sourceKey: "user_id",
});

User.hasMany(Messages, { foreignKey: "sender_id", as: "sentMessages" });

User.hasMany(Messages, { foreignKey: "receiver_id", as: "receivedMessages" });

User.hasMany(Transaction, { foreignKey: "buyer_id", as: "boughtTransactions" });

User.hasMany(Transaction, { foreignKey: "seller_id", as: "soldTransactions" });

User.hasMany(Favorites, { foreignKey: "user_id", as: "favorites" });

User.hasMany(Follows, { foreignKey: "follower_id", as: "following" });

User.hasMany(Follows, { foreignKey: "followed_id", as: "followers" });

User.hasMany(CommentsAndRating, {
  foreignKey: "commenter_id",
  as: "commentsAndRatings",
});

export default User;
