import { prisma } from "@/lib/db";
import { RegisterUser } from "@/types/User";

export const registerUser = ({
  fullName,
  phoneNumber,
  email,
  address,
  password,
}: RegisterUser) => {
  const user = prisma.user.create({
    data: {
      email,
      fullName,
      password,
      phoneNumber,
      address,
    },
  });

  return user;
};
