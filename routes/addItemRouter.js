const { Router } = require("express");
const { getCategories } = require("../controllers/categoryController");
const { addItem } = require("../controllers/itemsController");

const addItemRouter = Router();

addItemRouter.get("/", async (req, res) => {
    const categories = await getCategories();
    res.render("addItem", { categories });
});

addItemRouter.post("/", async (req, res) => {
    // console.log();
    await addItem(req.body);
    res.redirect("/");
});

module.exports = addItemRouter;
