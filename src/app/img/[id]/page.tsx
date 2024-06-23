// import { Modal } from "./modal";

function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  return <div className="p-6 text-4xl">Img id: {photoId}</div>;
}

export default PhotoModal;
