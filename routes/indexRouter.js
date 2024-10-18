const { Router } = require("express");
const { getItems } = require("../controllers/itemsController");

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
    const items = await getItems();
    res.render("index", { items });
});

module.exports = indexRouter;
