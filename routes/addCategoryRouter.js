const { Router } = require("express");
const { addCategory } = require("../controllers/categoryController");

const addCategoryRouter = Router();

addCategoryRouter.get("/", async (req, res) => {
    res.render("addCategory");
});

addCategoryRouter.post("/", async (req, res) => {
    await addCategory(req.body.category_name);
    res.redirect("/");
});

module.exports = addCategoryRouter;
