import Card from "./Card";
import Button from "./Button";
import Input from "./Input";
import Link from "next/link";
import { FC, FormEvent, useCallback, useEffect, useState } from "react";

import styles from "@/styles/typography.module.css";
import clsx from "clsx";
import { signin, signup } from "../lib/api";
import { useRouter } from "next/navigation";

const signinContent = {
  linkUrl: "/signin",
  linkText: "Already have an account?",
  header: "Sign in!",
  subheader: "Just a few things to get started",
  buttonText: "Sign in!",
};

const signupContent = {
  linkUrl: "/signup",
  linkText: "Don't have an account?",
  header: "Sign up!",
  subheader: "Enter your credentials to access your account",
  buttonText: "Sign up!",
};

const initial = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
};

interface AuthFormProps {
  mode?: "signup" | "signin";
}

const AuthForm: FC<AuthFormProps> = ({ mode = "signup" }) => {
  const [formState, setFormState] = useState({ ...initial });
  const [error, setError] = useState("");

  const router = useRouter();

  const content = mode === "signup" ? signupContent : signinContent;

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        if (mode === "signup") {
          await signup(formState);
        } else {
          await signin(formState);
        }

        router.replace("/");
      } catch (e) {
        setError(`Could not ${mode}`);
      } finally {
        setFormState({ ...initial });
      }
    },
    // eslint-disable-next-line
    [
      formState.email,
      formState.password,
      formState.firstName,
      formState.lastName,
    ]
  );

  return (
    <Card className="grid  w-96">
      <h2 className={styles["heading-3"]}>{content.header}</h2>
      <form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <>
            <label
              className={clsx(styles["body-5"], "mt-2")}
              htmlFor="firstName"
            >
              First Name
              <Input
                id="firstName"
                required
                type="text"
                placeholder="Enter your first name..."
                value={formState.firstName}
                className="shadow mt-2"
                onChange={(e) =>
                  setFormState((s) => ({ ...s, firstName: e.target.value }))
                }
              />
            </label>
            <label
              className={clsx(styles["body-5"], "mt-2")}
              htmlFor="lastName"
            >
              Last Name
              <Input
                id="lastName"
                required
                type="text"
                placeholder="Enter your last name..."
                value={formState.lastName}
                className="shadow mt-2"
                onChange={(e) =>
                  setFormState((s) => ({ ...s, lastName: e.target.value }))
                }
              />
            </label>
          </>
        )}
        <label className={clsx(styles["body-5"], "mt-2")} htmlFor="email">
          Email
          <Input
            id="email"
            required
            type="email"
            placeholder="Enter your email..."
            value={formState.email}
            className="shadow mt-2"
            onChange={(e) =>
              setFormState((s) => ({ ...s, email: e.target.value }))
            }
          />
        </label>
        <label className={clsx(styles["body-5"], "mt-2")} htmlFor="password">
          Password
          <Input
            id="password"
            required
            type="password"
            placeholder="Enter your password..."
            value={formState.password}
            className="shadow mt-2"
            onChange={(e) =>
              setFormState((s) => ({ ...s, password: e.target.value }))
            }
          />
        </label>
        {mode === "signup" && (
          <label className={clsx(styles["body-5"], "mt-2")} htmlFor="password">
            Confirm Password
            <Input
              id="confirmPassword"
              required
              type="password"
              placeholder="Confirm your password..."
              value={formState.confirmPassword}
              className="shadow mt-2"
              onChange={(e) =>
                setFormState((s) => ({ ...s, confirmPassword: e.target.value }))
              }
            />
          </label>
        )}
        {mode === "signin" && (
          <Link href="#" className="justify-self-end mt-1 text-gray-400">
            forgot password?
          </Link>
        )}
        <Button className="mt-4">{content.buttonText}</Button>
      </form>
    </Card>
  );
};

export default AuthForm;
