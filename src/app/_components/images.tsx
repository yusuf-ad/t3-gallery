import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {images.map((image) => (
        <div className="flex w-48 flex-col" key={image.id}>
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              width={192}
              height={192}
              style={{ objectFit: "contain" }}
              alt={image.name}
            />
          </Link>
          {image.name}
        </div>
      ))}
    </div>
  );
}

export default Images;
