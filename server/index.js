const express = require("express");
const path = require("path");
const serverRender = require("./middlewares/serverRender");

const PORT = 5000;
const STATIC_BUILD = path.resolve(__dirname, "..", "build");
const app = express();
const router = express.Router();

// Define middlewares
router.get("/", serverRender);
router.use(express.static(STATIC_BUILD));
app.use(router);

// Starting server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
