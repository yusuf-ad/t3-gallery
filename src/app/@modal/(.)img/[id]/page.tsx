// import { Modal } from "./modal";

import { getMyImage } from "~/server/queries";

async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  const image = await getMyImage(photoId);

  return (
    <div className="p-6 text-4xl">
      <img className="h-64 w-64" src={image.url} alt={image.name} />

      {image.name}
    </div>
  );
}

export default PhotoModal;
