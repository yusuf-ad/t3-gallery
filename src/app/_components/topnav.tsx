"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
import SimpleUploadButton from "./simple-upload-button";

function TopNav() {
  // const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-6 text-xl font-semibold">
      <Link href={"/"}>Gallery</Link>

      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          {/* <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => router.refresh()}
          /> */}

          <SimpleUploadButton />

          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export default TopNav;
