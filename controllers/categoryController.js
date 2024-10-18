const { getAllCategories, addNewCategory } = require("../db/queries");

async function getCategories() {
    const categories = await getAllCategories();
    return categories;
}

async function addCategory(category_name) {
    await addNewCategory(category_name);
}

module.exports = { getCategories, addCategory };
