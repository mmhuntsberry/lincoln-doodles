import clsx from "clsx";
import { useEffect, useRef } from "react";
import styles from "@/styles/typography.module.css";

// @ts-ignore
const UploadWidget = ({ onImageUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    // @ts-ignore
    cloudinaryRef.current = window.cloudinary;
    // @ts-ignore
    widgetRef.current = cloudinaryRef?.current?.createUploadWidget(
      {
        cloudName: "mattthebunny",
        uploadPreset: "awkpsyeu",
        folder: "lincoln-doodles",
      },
      // @ts-ignore
      function (error, result) {
        if (result.event === "success") {
          // @ts-ignore
          onImageUpload((prev) => ({
            ...prev,
            doodleId: result.info.public_id.split("/")[1],
          }));
        }
      }
    );
  }, [onImageUpload]);

  return (
    <button
      className={clsx(
        styles["heading-6"],
        "border-none rounded-lg text-white bg-red-200 shadow-2xl p-2 mt-3"
      )}
      onClick={(e) => {
        e.preventDefault();
        // @ts-ignore
        widgetRef.current.open();
      }}
    >
      Upload image
    </button>
  );
};

export default UploadWidget;
