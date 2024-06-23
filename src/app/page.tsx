import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/images";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full p-6 text-center text-2xl">
          Please sign in above{" "}
        </div>
      </SignedOut>

      <SignedIn>
        <Suspense fallback={<p className="p-6 text-2xl">Loading...</p>}>
          <Images />
        </Suspense>
      </SignedIn>
    </main>
  );
}

export default HomePage;
