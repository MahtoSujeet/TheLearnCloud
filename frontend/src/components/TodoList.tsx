import { useState, useCallback } from "react"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

let testData = [
  {
    id: "id1",
    title: "hellow",
    desc: "world"
  },
  {
    id: "id0",
    title: "hellow",
    desc: "world"
  },
  {
    id: "id2",
    title: "hellow",
    desc: "world",
    done: false,
  },
  {
    id: "id4",
    title: "hellow",
    desc: "worldlo Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    done: true
  },
]


export default function TodoList() {
  const onDragEnd = useCallback(() => {
    console.log("hey")
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <Droppable droppableId="droppable1">
        {(provided: any, _: any) => (
          <section ref={provided.innerRef} {...provided.droppableProps}>

            {testData.map((todoitem: TodoItemProps, idx) => (
              <Draggable draggableId={todoitem.id} index={idx} key={todoitem.id}>

                {(provided: any, _: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >

                    <TodoItem id={todoitem.id} title={todoitem.title} desc={todoitem.desc} isDone={todoitem.isDone} />
                  </div>
                )}

              </Draggable>
            )
            )}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  )
}


interface TodoItemProps {
  id: string,
  title: string,
  desc: string,
  isDone?: boolean,
}

function TodoItem(props: TodoItemProps) {
  const [isDone, setIsDone] = useState(props.isDone)

  // Style for line through if isDone is true
  let style = "m-4 p-2 shadow " // default style
  style = isDone ? (style + " line-through") : style

  return (

    <div className={style}> <input className="cursor-pointer" type="checkbox" checked={isDone} onClick={_ => (setIsDone(!isDone))} />
      <span className="ml-3 text-lg font-bold">{props.title} : </span><span>{props.desc}</span>
    </div >

  )
}
