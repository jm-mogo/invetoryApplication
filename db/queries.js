const pool = require("./pool");

async function getAllItems() {
    const { rows } = await pool.query(
        "SELECT * FROM items INNER JOIN category ON items.category_id = category.category_id"
    );
    return rows;
}

async function getItemsByFilter(category_id) {
    const { rows } = await pool.query(
        "SELECT * FROM items INNER JOIN category ON items.category_id = category.category_id WHERE items.category_id = $1",
        [category_id]
    );
    return rows;
}

async function addNewItem(item_name, price, category_id) {
    await pool.query(
        "INSERT INTO items (item_name, price, category_id) VALUES ($1, $2, $3)",
        [item_name, price, category_id]
    );
}

async function deleteItemWithId(item_id) {
    await pool.query("DELETE FROM items WHERE item_id = $1", [item_id]);
}

async function updateOneItem(item_id, item_name, price, category_id) {
    await pool.query(
        "UPDATE items SET item_name = $1, price = $2, category_id = $3 WHERE item_id = $4",
        [item_name, price, category_id, item_id]
    );
}

async function addNewCategory(category_name) {
    await pool.query("INSERT INTO category (category_name) VALUES ($1)", [
        category_name,
    ]);
}

async function deleteCategoryWithId(category_id) {
    await pool.query("DELETE FROM category WHERE category_id = $1", [
        category_id,
    ]);
}

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM category");
    return rows;
}

module.exports = {
    getAllItems,
    getAllCategories,
    addNewItem,
    deleteItemWithId,
    addNewCategory,
    updateOneItem,
    getItemsByFilter,
    deleteCategoryWithId,
};
