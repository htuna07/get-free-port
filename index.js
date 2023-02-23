import getPort from "get-port";
import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/get-free-port", async (req, res) => {
  try {
    const port = await getPort()
    res.status(200).send({ message: port });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

app.listen(port, () => {
  console.log(`get-free-port app listening on port ${port}`);
});
