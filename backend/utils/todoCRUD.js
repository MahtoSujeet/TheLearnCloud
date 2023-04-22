import TodoItemModel from "../models/TodoItem.js";
import { connectDB } from "../config/db.js"

export default class TodoItemCRUD {
  constructor() {
    connectDB()
  }

  async deleteAll() {
    try {
      const h = await TodoItemModel.deleteMany({})
      console.log(h)
    } catch (err) {
      console.error(err)
    }
  }
}

