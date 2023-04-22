import { FaPlus } from "react-icons/fa"

export default function AddTodo() {
  return (
    <section className="relative my-8 min-mx-auto mx-auto p-4 max-w-lg shadow-[0px_2px_5px_rgba(0,0,0,0.2)] rounded">
      <div className="flex flex-col gap-4">
        <input className="placeholder-opacity-70 placeholder-black h-8 focus:outline-0" placeholder="Title" />
        <textarea rows={5} className="placeholder-opacity-50 placeholder-black text-sm focus:outline-0" placeholder="Add a ToDo" />
        <FaPlus className="absolute bg-yellow-500 right-6 -bottom-6 p-4 rounded-full" size="4rem" color="white" />
      </div>
    </section>
  )
}
