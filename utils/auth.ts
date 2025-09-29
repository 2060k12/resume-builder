import bcrypt from "bcryptjs";

// function to hash a password
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
};

// function to check a password
export const checkPassword = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashPassword);
};
