const Router = require("express");
const { updateCategory } = require("../controllers/categoryController");

const updateCategoryRouter = Router();

updateCategoryRouter.get("/", async (req, res) => {
    const { category_id, category_name } = req.query;
    res.render("updateCategory", {
        category_id,
        category_name,
    });
});

updateCategoryRouter.post("/", async (req, res) => {
    await updateCategory(req.body);

    res.redirect("/addCategory");
});

module.exports = updateCategoryRouter;
