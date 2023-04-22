import mongoose from "mongoose"

const { Schema, model } = mongoose

const todoItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
    unique: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  }

})

const TodoItemModel = model("TodoItem", todoItemSchema)

export default TodoItemModel
