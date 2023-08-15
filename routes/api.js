import express from 'express';
import Todos from './models/user.js';

const router = express.Router();

router.post('/todos', async (req, res) => {
  try {
    const body = req.body;
    const { title } = body;

    if (!title) {
      return res.status(400).json({ error: "Title field is required!" });
    }

    const newTodo = await Todos.create({ title: title });

    return res.status(201).json({
      message: "Todo has been created",
      result: newTodo
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
