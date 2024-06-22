import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/ce5542ed-ae4e-497e-a399-a9c36de7b11f-sezbjl.png",
  "https://utfs.io/f/a182376a-4662-478c-b10e-6c3a220dd782-tehexf.png",
  "https://utfs.io/f/2297c454-86ac-48ff-ba93-ecb85d16ada3-fdmd9h.png",
  "https://utfs.io/f/745166b5-eeff-483c-92d1-089aa8d0deee-e9ow49.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <div className="flex flex-wrap gap-4">
      {posts.map((post) => (
        <div key={post.id} className="w-48 p-6">
          {post.name}
          {/* <img src={post.image_url} /> */}
        </div>
      ))}

      {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
        <div key={image.id + "-" + index} className="w-48 p-6">
          <img src={image.url} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
