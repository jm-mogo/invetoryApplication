const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const addItemRouter = require("./routes/addItemRouter");
const addCategoryRouter = require("./routes/addCategoryRouter");
const updateItemRouter = require("./routes/updateItemRouter");
const { PORT, HOST } = require("./config");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/addItem", addItemRouter);
app.use("/addCategory", addCategoryRouter);
app.use("/updateItem", updateItemRouter);

app.listen(PORT, HOST, () => {
    console.log(`App listening on ${HOST} ${PORT}`);
});
