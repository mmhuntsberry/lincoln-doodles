import { db } from "@/lib/db";
import Image from "next/image";

const getData = async (id: string) => {
  const doodle = await db.doodle.findFirst({
    where: { id },
  });

  return doodle;
};

interface Props {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params }: Props) {
  const doodle = await getData(params.id);

  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      {/* <TaskCard tasks={project.tasks} title={project.name} /> */}
      <Image
        width="200"
        height="200"
        style={{ height: "50%", width: "50%", objectFit: "contain" }}
        src={`https://res.cloudinary.com/mattthebunny/image/upload/v1661724362/lincoln-doodles/${doodle?.doodleId}.png`}
        // sizes="100vw"
        alt={doodle?.name ?? ""}
      />
      <h2>{doodle?.name}</h2>
      <p>{doodle?.description}</p>
      <span>{doodle?.price}</span>
    </div>
  );
}
