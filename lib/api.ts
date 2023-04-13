export const fetcher = async ({
  url,
  method,
  body,
  json = true,
}: {
  url: string;
  method: string;
  body: any;
  json?: boolean;
}) => {
  console.log("body", body);
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  // if (!res.ok) {
  //   throw new Error("API error");
  // }

  if (json) {
    const data = res.json();
    return data;
  }
};

interface User {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

interface Doodle {
  name: string;
  description: string;
  price: string;
  doodleDir: string;
  doodleId: string;
}

export const signup = async (user: User) => {
  return fetcher({
    url: "/api/signup",
    method: "POST",
    body: user,
    json: false,
  });
};

export const signin = async (user: User) => {
  return fetcher({
    url: "/api/signin",
    method: "POST",
    body: user,
    json: false,
  });
};

export const signout = async () => {
  return fetcher({
    url: "/api/signout",
    method: "POST",
    body: null,
    json: false,
  });
};

export const createNewDoodle = async (doodle: any) => {
  return fetcher({
    url: "/api/create",
    method: "POST",
    body: doodle,
    json: false,
  });
};
