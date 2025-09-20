import prisma from "@/lib/db";
import { RegisterUser } from "@/types/User";
import { ApiError } from "@/utils/ApiError";
import { hashPassword } from "@/utils/auth";

export const registerUser = async (data: RegisterUser) => {
  // const hashedPassword = bcrypt
  const hashedPassword = await hashPassword(data.password);

  const findUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (findUser) throw new ApiError("User Already Exists", "USER_EXISTS");

  const user = prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });

  return user;
};

export const uploadUserDetails = async (data: Details) => {
  console.log(data.userId);
  const searchedUser = await prisma.user.findUniqueOrThrow({
    where: {
      id: data.userId,
    },
  });

  const academicCreateInput = data.academicJourney.map((a) => ({
    schoolName: a.schoolName,
    location: a.location,
    degreeName: a.degreeName,
    gpa: a.gpa,
    fieldOfStudy: a.fieldOfStudy,
    graduationYear: a.graduationYear,
  }));

  // 3️⃣ Map experience to Prisma-compatible format
  const experienceCreateInput = data.experience.map((e) => ({
    jobTitle: e.jobTitle,
    companyName: e.companyName,
    timePeriod: e.timePeriod,
    location: e.location,
    responsibilities: e.responsibilities,
  }));

  const user = await prisma.userDetails.create({
    data: {
      userId: data.userId,
      hardSkills: data.hardSkills,
      softSkills: data.softSkills,
      story: data.story,
      academicJourney: {
        create: academicCreateInput,
      },
      experiences: {
        create: experienceCreateInput,
      },
    },
    include: {
      academicJourney: true,
      experiences: true,
    },
  });
};

export const getUserDetail = async (id: string) => {
  const user = prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
    omit: {
      password: true,
    },
    include: {
      details: {
        include: {
          academicJourney: true,
          experiences: true,
        },
      },
    },
  });

  return user;
};

interface Acadamic {
  schoolName: string;
  location: string;
  degreeName: string;
  gpa: string;
  fieldOfStudy: string;
  graduationYear: string;
}

interface Experience {
  jobTitle: string;
  companyName: string;
  timePeriod: string;
  location: string;
  responsibilities: string;
}

export interface Details {
  userId: string;
  hardSkills: string;
  softSkills: string;
  story: string;
  academicJourney: Acadamic[];
  experience: Experience[];
}
