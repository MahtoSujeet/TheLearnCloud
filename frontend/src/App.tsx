import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

function App() {

  return (
    <>
      <Header />
      <div className="max-mx-[1200px] mx-2">
        <AddTodo />
        <TodoList />
      </div>
    </>
  )
}

export default App
