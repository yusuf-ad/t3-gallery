import FullPageImageView from "~/components/full-image-page";
import Modal from "./modal";

function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return (
    <div className="p-6 text-4xl">
      <Modal>
        <FullPageImageView id={idAsNumber} />
      </Modal>
    </div>
  );
}

export default PhotoModal;
