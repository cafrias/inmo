import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const PasswordEncoder = {
  /**
   * Encodes the given password
   * @param {string} plainTextPassword
   */
  async encode(plainTextPassword) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return await bcrypt.hash(plainTextPassword, salt);
  },

  /**
   * Compares the plain text password with the given password
   * @param {string} plainTextPassword
   * @param {string} encodedPassword
   */
  async compare(plainTextPassword, encodedPassword) {
    return bcrypt.compare(plainTextPassword, encodedPassword);
  }
};

export default PasswordEncoder;
