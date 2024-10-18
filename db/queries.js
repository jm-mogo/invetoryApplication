const pool = require("./pool");

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM items");
    console.loh(rows);
    return rows;
}

async function addNewItem(item_name, price, category_id) {
    await pool.query(
        "INSERT INTO items (item_name, price, category_id) VALUES ($1, $2, $3)",
        [item_name, price, category_id]
    );
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

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM category");
    return rows;
}

module.exports = {
    getAllItems,
    getAllCategories,
    addNewItem,
    addNewCategory,
    updateOneItem,
};
