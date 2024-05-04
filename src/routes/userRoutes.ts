import { Router } from "express";

const router = Router();

// USER CRUD
// create user
router.post("/", (req, res) => {
  res.status(501).json({ msg: "Error not implemented" });
});

// list of users
router.get("/", (req, res) => {
  res.status(501).json({ msg: "Not implemented" });
});

// get one user
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ msg: `Not implemented ${id}` });
});

// update user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ msg: `Not implemented ${id}` });
});

// for delete the user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ msg: `Not implemented ${id}` });
});

export default router;
