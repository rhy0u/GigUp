import { PrismaClient } from "@prisma/client";
import { Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();
async function seed() {
  const hash = await bcrypt.hash("poule", 10);
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: { ...user, hash } });
    })
  );
}

seed();

function getUsers() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      username: "Jean01",
      email: "jean01@gmail.com",
      instrument: Role.guitar,
    },
    {
      username: "Patrick01",
      email: "patrick@gmail.com",
      instrument: Role.singer,
    },
    {
      username: "Marilyn01",
      email: "marylin01@gmail.com",
      instrument: Role.drums,
    },
    {
      username: "Emilly01",
      email: "emily01@gmail.com",
      instrument: Role.bass,
    },
  ];
}
