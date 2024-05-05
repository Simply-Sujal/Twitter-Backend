import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient(); // we are able to interact with db

// USER CRUD
// create user
router.post("/", async (req, res) => {
  const { email, name, username } = req.body;
  // console.log(email, name, username);
  try {
    const result = await prisma.user.create({
      data: {
        email,
        name,
        username,
        bio: "Hello I'm new on Twitter",
      },
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ erro: "Username and email should be unique." });
  }
});

// list of users
router.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany({
    // select: {
    //   id: true,
    //   name: true,
    //   image: true,
    //   bio: true,
    // },
  });
  res.json(allUsers);
});

// get one user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const singleUser = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { tweets: true },
  });
  res.json(singleUser);
});

// update user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { bio, name, image } = req.body;

  try {
    const result = await prisma.user.update({
      where: { id: Number(id) },
      data: { bio, name, image },
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: "Failed to update the user" });
  }

  res.status(501).json({ msg: `Not implemented ${id}` });
});

// for delete the user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteSingleUser = await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.status(200).json(deleteSingleUser);
  } catch (error) {
    res.status(400).json({ msg: "User unable to delete" });
  }
  res.status(501).json({ msg: `Not implemented ${id}` });
});

export default router;
