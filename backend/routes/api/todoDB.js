import { Router } from "express";
import TodoItemCRUD from "../../utils/todoCRUD.js";

const router = Router()
const todoDB = new TodoItemCRUD()

router.get("/", (req, res) => {
  res.send("this is api page")
})

router.get("/deleteall", async (req, res) => {
  const h = await todoDB.deleteAll()
  res.send(h)
})

export default router;
