const Router = require("express");
const { getCategories } = require("../controllers/categoryController");
const { updateItem } = require("../controllers/itemsController");

const updateItemRouter = Router();

updateItemRouter.get("/", async (req, res) => {
    const categories = await getCategories();
    const { item_id, item_name, price, category_id } = req.query;

    res.render("updateItem", {
        item_id,
        item_name,
        price,
        category_id,
        categories,
    });
});

updateItemRouter.post("/", async (req, res) => {
    await updateItem(req.body);
    res.redirect("/");
});

module.exports = updateItemRouter;
