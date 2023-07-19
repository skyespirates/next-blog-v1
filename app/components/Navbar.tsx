import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <h1 className="text-2xl font-medium">
              Skyes <span className="text-violet-500">Blog</span>
            </h1>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
