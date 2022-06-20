const router = require("express").Router();
// import todoItem model
const todoItemsModel = require("../models/todoItems");

// Lets create our fisrt route --  We will add TodoItems to our database
router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });
    // save the new item to the database
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (error) {
    res.json(error);
  }
});

// Lets create our second route --  We will get all the TodoItems from our database

router.get("/api/items", async (req, res) => {
  try {
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems);
  } catch (error) {
    res.json(error);
  }
});

// Lets create our third route --  We will update a TodoItem from our database
router.put("/api/item/:id", async (req, res) => {
  try {
    // find the item by its id
    const updatedItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item updated");
  } catch (error) {
    res.json(error);
  }
});

// Lets create our fourth route --  We will delete a TodoItem from our database
router.delete("/api/item/:id", async (req, res) => {
  try {
    // find the item by its id
    const deletedItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedItem);
  } catch (error) {
    res.json(error);
  }
});

// export the router
module.exports = router;
