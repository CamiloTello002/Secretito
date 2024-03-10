import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  console.log("route found!");
  res.status(201).json({
    status: "success",
    message: "I already read your message hah",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
