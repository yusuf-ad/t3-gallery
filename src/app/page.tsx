import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div className="flex w-48 flex-col" key={image.id}>
          <img src={image.url} />
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
