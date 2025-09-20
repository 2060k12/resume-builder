import { registerUser } from "@/services/UserServices";
import { RegisterUser } from "@/types/User";

const registerUserController = (user: RegisterUser) => {
  try {
    registerUser({ ...user });
  } catch (error) {}
};
