import { getMyImage } from "~/server/queries";

async function FullPageImageView(props: { id: number }) {
  const image = await getMyImage(props.id);

  return (
    <div className="flex h-full w-full min-w-0 ">
      <div className="flex flex-shrink items-center justify-center">
        <img
          className=" flex-shrink object-contain"
          src={image.url}
          alt={image.name}
        />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col">
        <div className="text-xl font-bold ">{image.name}</div>
      </div>
    </div>
  );
}

export default FullPageImageView;
