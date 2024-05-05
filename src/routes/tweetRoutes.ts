import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Tweet CRUD
// create Tweet
router.post("/", async (req, res) => {
  const { content, image, userId } = req.body;

  try {
    const createPost = await prisma.tweet.create({
      data: {
        content,
        image,
        userId, // todo managed based on the auth user
      },
    });
    res.json(createPost);
  } catch (error) {
    res.status(501).json({ msg: "Did not create tweet" });
  }
});

// list of Tweet
router.get("/", async (req, res) => {
  try {
    const getAllTweets = await prisma.tweet.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true,
            image: true,
          },
        },
      },
    });
    res.json(getAllTweets);
  } catch (error) {
    res.status(501).json({ msg: "Not implemented" });
  }
});

// get one Tweet
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getSingleTweet = await prisma.tweet.findUnique({
      where: { id: Number(id) },
    });
    if (!getSingleTweet) {
      return res.status(404).json({ error: "Tweet not found!" });
    }
    res.json(getSingleTweet);
  } catch (error) {
    res.status(501).json({ msg: `Not implemented ${id}` });
  }
});

// update Tweet
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ msg: `Not implemented ${id}` });
});

// for delete the Tweet
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTweet = await prisma.tweet.delete({
      where: { id: Number(id) },
    });
    res.json(deleteTweet);
  } catch (error) {
    res.status(501).json({ msg: "Tweet does not deleted" });
  }
});

export default router;
