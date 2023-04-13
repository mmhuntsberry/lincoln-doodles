"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "./Link";

// const myImage = new CloudinaryImage("sample", {
//   cloudName: "mattthebunny",
// }).resize(fill().width(100).height(150));

interface Doodle {
  id?: string;
  className?: string;
  src?: string;
  // children: React.ReactNode;
}

const Doodle = ({ className, id, src }: Doodle) => {
  return (
    <Link href={`/doodle/${id}`}>
      <div
        className={clsx("bg-white shadow w-64 h-64 p-4", className)}
        // style={{ objectFit: "contain" }}
      >
        <Image
          width="200"
          height="200"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={`https://res.cloudinary.com/mattthebunny/image/upload/v1661724362/lincoln-doodles/${src}.png`}
          // sizes="100vw"
          alt="Turtle in the ocean"
        />
      </div>
    </Link>
  );
};

export default Doodle;
