import { clerkClient } from "@clerk/nextjs/server";
import { getMyImage } from "~/server/queries";

async function FullPageImageView(props: { id: number }) {
  const image = await getMyImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0 ">
      <div className="flex flex-shrink items-center justify-center">
        <img
          className=" flex-shrink object-contain"
          src={image.url}
          alt={image.name}
        />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-2 text-lg">
        <div className="border-b p-2 text-center ">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>

          <span>{uploaderInfo.fullName}</span>
        </div>

        <div className="flex flex-col p-2">
          <span>Created On:</span>

          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default FullPageImageView;
