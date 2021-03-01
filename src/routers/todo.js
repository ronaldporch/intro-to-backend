const express = require("express");

const todo = express.Router();

let todoItems = [];

todo
  .get("/", (req, res) => {
    res.json(todoItems);
  })
  .post("/", (req, res) => {
    const newTodo = {
      id: todoItems.length + 1,
      text: req.body.text,
      active: true,
    };
    todoItems = [...todoItems, newTodo];
    res.json(newTodo);
  })
  .put("/:id", (req, res) => {
    todoItems = todoItems.map((item) =>
      item.id === parseInt(req.params.id)
        ? {
            ...item,
            active: false,
          }
        : item
    );
    res.json(req.params.id);
  });

module.exports = todo;
