import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("route found!");
  console.log(req.body.username);
  res.status(201).json({
    status: "success",
    message: "I already read your message hah",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
