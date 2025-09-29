-- CreateTable
CREATE TABLE "public"."User" (
    "id" UUID NOT NULL,
    "fullName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "detailsId" UUID,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserDetails" (
    "id" UUID NOT NULL,
    "story" TEXT NOT NULL,
    "hardSkills" TEXT NOT NULL,
    "softSkills" TEXT NOT NULL,

    CONSTRAINT "UserDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AcademicJourney" (
    "id" UUID NOT NULL,
    "schoolName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "degreeName" TEXT NOT NULL,
    "gpa" TEXT NOT NULL,
    "fieldOfStudy" TEXT NOT NULL,
    "graduationYear" TEXT NOT NULL,
    "userDetailsId" UUID NOT NULL,

    CONSTRAINT "AcademicJourney_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Experience" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "timePeriod" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_detailsId_key" ON "public"."User"("detailsId");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_detailsId_fkey" FOREIGN KEY ("detailsId") REFERENCES "public"."UserDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AcademicJourney" ADD CONSTRAINT "AcademicJourney_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "public"."UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
