const {
    getAllCategories,
    addNewCategory,
    deleteCategoryWithId,
} = require("../db/queries");

async function getCategories() {
    const categories = await getAllCategories();
    return categories;
}

async function addCategory(category_name) {
    await addNewCategory(category_name);
}

async function deleteCategory(category_id) {
    await deleteCategoryWithId(category_id);
}

module.exports = { getCategories, addCategory, deleteCategory };
