import Card from "./Card";
import Button from "./Button";
import Input from "./Input";
import UploadWidget from "./UploadImage";
import Link from "next/link";
import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import styles from "@/styles/typography.module.css";
import clsx from "clsx";
import { createNewDoodle } from "../lib/api";
import { useRouter } from "next/navigation";

const createContent = {
  linkUrl: "/create",
  // linkText: "Already have an account?",
  header: "Create Doodle!",
  // subheader: "Just a few things to get started",
  buttonText: "Create!",
};

const editContent = {
  linkUrl: "/create",
  // linkText: "Already have an account?",
  header: "Create Doodle!",
  // subheader: "Just a few things to get started",
  buttonText: "Create!",
};

const initial = {
  name: "",
  description: "",
  doodleDir: "lincoln-doodles",
  doodleId: "",
  price: "",
};

interface DoodleFormProps {
  mode?: "create" | "edit";
}

const DoodleForm: FC<DoodleFormProps> = ({ mode = "create" }) => {
  const [formState, setFormState] = useState({ ...initial });
  const [error, setError] = useState("");

  const router = useRouter();

  const content = mode === "create" ? createContent : editContent;

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        if (mode === "create") {
          // await signup(formState);
          await createNewDoodle(formState);
        } else {
          // await signin(formState);
        }

        router.replace("/doodles");
      } catch (e) {
        setError(`Could not ${mode}`);
      } finally {
        setFormState({ ...initial });
      }
    },
    // eslint-disable-next-line
    [formState.name, formState.description, formState.doodleId, formState.price]
  );

  let isDisabled =
    formState.name &&
    formState.description &&
    formState.doodleId &&
    formState.price
      ? true
      : false;

  return (
    <Card className="grid justify-center w-96">
      <h2 className={styles["heading-3"]}>{content.header}</h2>
      <form onSubmit={handleSubmit}>
        {mode === "create" && (
          <>
            <label className={clsx(styles["body-5"], "mt-2")} htmlFor="name">
              Name
              <Input
                id="name"
                // required
                type="text"
                placeholder="Enter doodle name..."
                value={formState.name}
                className="shadow mt-2"
                onChange={(e) =>
                  setFormState((s) => ({ ...s, name: e.target.value }))
                }
              />
            </label>
            <label
              className={clsx(styles["body-5"], "mt-2")}
              htmlFor="description"
            >
              Description
              <Input
                id="description"
                type="text"
                placeholder="Enter a doodle name..."
                value={formState.description}
                className="shadow mt-2"
                onChange={(e) =>
                  setFormState((s) => ({ ...s, description: e.target.value }))
                }
              />
            </label>
            <label
              className={clsx(styles["body-5"], "mt-2")}
              htmlFor="description"
            >
              Price
              <Input
                id="price"
                type="text"
                placeholder="Enter a doodle price..."
                value={formState.price}
                className="shadow mt-2"
                onChange={(e) =>
                  setFormState((s) => ({ ...s, price: e.target.value }))
                }
              />
            </label>
          </>
        )}
        <UploadWidget onImageUpload={setFormState} />
        <Button disabled={!isDisabled} className="mt-4">
          {content.buttonText}
        </Button>
      </form>
    </Card>
  );
};

export default DoodleForm;
