const { getAllItems, addNewItem, updateOneItem } = require("../db/queries");

async function getItems() {
    const items = await getAllItems();
    return items;
}

async function addItem({ item_name, price, category_id }) {
    await addNewItem(item_name, price, category_id);
}

async function updateItem({ item_id, item_name, price, category_id }) {
    await updateOneItem(item_id, item_name, price, category_id);
}

module.exports = { getItems, addItem, updateItem };
