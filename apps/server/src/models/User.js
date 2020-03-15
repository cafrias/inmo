import { DataTypes, Model } from "sequelize";
import { v4 as uuid } from "uuid";
import dbConn from "../../db/dbConn";
import PasswordEncoder from "../utils/PasswordEncoder";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: uuid,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize: dbConn,
    modelName: "User",
    tableName: "users"
  }
);

User.beforeCreate(async user => {
  const encodedPassword = await PasswordEncoder.encode(user.password);
  user.password = encodedPassword;
});

export default User;
