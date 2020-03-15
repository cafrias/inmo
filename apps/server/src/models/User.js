import Model from "sequelize/lib/model";
import { models } from "@inmo/engine";

const instanced = new models.User({
  id: "1234",
  email: "email@email.com",
  name: "pepe",
  password: "pass",
  phone: "123"
});

class User extends Model {}
User.init({
  id: {}
});
