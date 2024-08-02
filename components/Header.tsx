import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between items-center p-5 shadow-sm bg-white border-b">
      <Link
        href={"/dashboard"}
        className="font-semibold text-slate-800 text-2xl"
      >
        Whats
        <span className="text-white rounded-lg px-2 py-1 text-[1.3rem] ml-1 bg-gradient-to-br from-indigo-400 via-blue-500 to-indigo-400">
          PDF
        </span>
      </Link>
      <SignedIn>
        <div className="flex items-center space-x-2 ">
          <Button asChild variant={"link"} className="hidden md:flex">
            Pricing
          </Button>
          <Button asChild variant={"outline"} className="hidden md:flex">
            <Link href={"/dashboard"}>My Documents</Link>
          </Button>
          <Button asChild variant={"outline"} className="border-indigo-600">
            <Link href={"/dashboard/upload"}>
              <FilePlus2 />
            </Link>
          </Button>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
