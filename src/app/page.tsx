import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 px-6">
      {images.map((image) => (
        <div className="flex h-48 w-48 flex-col" key={image.id}>
          <Image
            src={image.url}
            width={192}
            height={192}
            style={{ objectFit: "contain" }}
            alt={image.name}
          />
          {image.name}
        </div>
      ))}
    </div>
  );
}

async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full p-6 text-center text-2xl">
          Please sign in above{" "}
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

export default HomePage;
