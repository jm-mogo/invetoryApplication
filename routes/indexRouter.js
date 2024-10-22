const { Router } = require("express");
const {
    getItems,
    deleteItem,
    getItemsFilter,
} = require("../controllers/itemsController");
const { getCategories } = require("../controllers/categoryController");

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
    const items = req.query.filter
        ? await getItemsFilter({ category_id: req.query.filter })
        : await getItems();
    const category = await getCategories();

    res.render("index", { items, category });
});

indexRouter.post("/", async (req, res) => {
    const { item_id } = req.body;
    console.log(req.body);
    await deleteItem({ item_id });
    res.redirect("/");
});

module.exports = indexRouter;
