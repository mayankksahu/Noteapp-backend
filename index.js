const express = require("express");
const cors = require("cors")
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
const { auth } = require("./middleware/auth.middleware");

const app = express();
app.use(cors())
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use(auth);

app.use("/note", noteRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (error) {
    console.log("something went wrong");
  }
  console.log("server started");
});
