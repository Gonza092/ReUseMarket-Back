import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";

class Transaction extends Model {
  public transaction_id!: number;

  public price!: number;
  public delivery_date!: Date;
  public delivery_address!: string;
  public status!: string;
}

Transaction.init(
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    delivery_date: {
      type: DataTypes.DATE,
    },
    delivery_address: {
      type: DataTypes.STRING(150),
    },
    status: {
      type: DataTypes.ENUM(
        "pending",
        "accepted",
        "rejected",
        "delivered",
        "cancelled"
      ),
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "Transaction",
    tableName: "Transactions",
  }
);

export default Transaction;
