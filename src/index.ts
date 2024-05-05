import express from "express";
import userRoutes from "../src/routes/userRoutes";
import tweetRoutes from "../src/routes/tweetRoutes";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World Updated");
});

app.use("/user", userRoutes);
app.use("/tweet", tweetRoutes);

// app.use("/")
app.listen(PORT || 3001, () => {
  console.log(`Server is running at ${PORT}`);
});
