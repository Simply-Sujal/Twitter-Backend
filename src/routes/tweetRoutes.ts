import { Router } from "express";

const router = Router();

// Tweet CRUD
// create Tweet
router.post("/", (req, res) => {
  res.status(501).json({ msg: "Error not implemented" });
});

// list of Tweet
router.get("/", (req, res) => {
  res.status(501).json({ msg: "Not implemented" });
});

// get one Tweet
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ msg: `Not implemented ${id}` });
});

// update Tweet
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ msg: `Not implemented ${id}` });
});

// for delete the Tweet
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ msg: `Not implemented ${id}` });
});

export default router;
