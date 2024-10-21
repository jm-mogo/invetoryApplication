const { Router } = require("express");
const { getItems, deleteItem } = require("../controllers/itemsController");

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
    const items = await getItems();
    res.render("index", { items });
});

indexRouter.post("/", async (req, res) => {
    const { item_id } = req.body;
    console.log(req.body);
    await deleteItem({ item_id });
    res.redirect("/");
});

module.exports = indexRouter;
