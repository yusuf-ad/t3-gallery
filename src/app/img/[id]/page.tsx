import FullPageImageView from "~/components/full-image-page";

function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return (
    <div className="h-full p-6 text-4xl">
      <FullPageImageView id={idAsNumber} />
    </div>
  );
}

export default PhotoModal;
