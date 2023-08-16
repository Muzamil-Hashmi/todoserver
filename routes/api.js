import express from 'express';
import Todos from '../models/user.js';

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
router.get('/todos', async (req, res) => {
  const todo = await Todos.findAll({})
  return res.status(200).json({ result: todo });
})
router.delete('/todos/:id', async (req, res) => {
  const deleteId = req.params.id;
  try {
    const deleteCount = await Todos.destroy({
      where: { id: deleteId }
    });
    if (deleteCount > 0) {
      return res.status(200).json({ result: 'deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Todo not found' });
    }
  }
  catch (error) {
    console.log("error deleting", error)
  }
})

router.put('/todos/:id',async(req,res)=>{
  const updateId = req.params.id;
  const updateData=req.body;
  try{
    const [updatedCount, updatedRows] = await Todos.update(updateData, {
      where: { id: updateId }
  });
    if(updatedCount>0){
      return res.status(200).json({result: "updated successfully"})

    }
    else{
      return res.status(404).json({error: "Update failed"})
    }

  }
  catch(err){
    console.log("error update", err)
}

})
// router.put('/todos/:id', async(req, res) => {

//   const updateId=req.params.id;
//   const updateData=req.body;
//   try {
//       const [updatedCount, updatedRows] = await Todos.update(updateData, {
//           where: { id: updateId }
//       });
//       if (updatedCount > 0) {
//           return res.status(200).json({ result: 'updated successfully' });
//       } else {
//           return res.status(404).json({ error: 'Todo not found' });
//       }
//   } catch (error) {
//       console.error('Error updating todo:', error);
//       return res.status(500).json({ error: 'Internal server error' });
//   }
// })


export default router;
