import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full  gap-3">
      <Link href={"/builder"}>
        <h1>Dashboard</h1>
      </Link>
      <Link href={"/onboarding"}>
        <h1>Onboarding</h1>
      </Link>
    </div>
  );
}
