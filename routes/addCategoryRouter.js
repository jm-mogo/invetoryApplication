const { Router } = require("express");
const {
    addCategory,
    getCategories,
    deleteCategory,
} = require("../controllers/categoryController");

const addCategoryRouter = Router();

addCategoryRouter.get("/", async (req, res) => {
    let message = false;
    const category = await getCategories();
    res.render("addCategory", { category, message });
});

addCategoryRouter.post("/", async (req, res) => {
    await addCategory(req.body.category_name);
    res.redirect("/addCategory");
});

addCategoryRouter.post("/delete", async (req, res) => {
    const { category_id } = req.body;
    let message = false;
    try {
        await deleteCategory(category_id);
    } catch {
        console.log("error");
        message = true;
    }
    const category = await getCategories();
    res.render("addCategory", { category, message });
});

module.exports = addCategoryRouter;
