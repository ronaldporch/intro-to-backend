const cors = require("cors");
const express = require("express");
const { todo } = require("./routers");
const config = require("../config");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/todo", todo);

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
