import { getMyImage } from "~/server/queries";

async function FullPageImageView(props: { id: number }) {
  const image = await getMyImage(props.id);

  return <img className="h-64 w-64" src={image.url} alt={image.name} />;
}

export default FullPageImageView;
