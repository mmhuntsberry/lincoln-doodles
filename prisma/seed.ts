import { hashPassword } from "../lib/auth";
import { db } from "../lib/db";

async function main() {
  const user = await db.user.upsert({
    where: { email: "user@email.com" },
    update: {},
    create: {
      email: "user@email.com",
      firstName: "User",
      lastName: "Person",
      password: await hashPassword("password"),
      doodles: {
        create: new Array(5).fill(1).map((_, i) => ({
          name: `Doodle ${i}`,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          doodleDir: "lincoln-doodles",
          doodleId: "630be6c9cff2229bb124a88b",
          price: "2",
        })),
      },
    },
    include: {
      doodles: true,
    },
  });
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
