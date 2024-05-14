import { Todo } from "./global.tsx";

export default function TodoItem({item, toggleTodo, removeTodo}: { item: Todo, toggleTodo: () => void, removeTodo: () => void }) {
  return (
    <div className="flex flex-col border-2 p-4 rounded-md space-y-3">
      <div className={"flex space-x-4 items-center" + (item.complete ? " line-through" : "")}>
        <div className="flex flex-col w-full space-y-3">
          <h1 className="text-2xl">{item.title}</h1>
          <p>{item.value}</p>
        </div>
      </div>
      <hr className="w-full border-gray-300" />
      <div className="flex space-x-2">
        <button className="p-2 bg-red-500 text-white rounded-md w-1/2" onClick={() => removeTodo()}>삭제</button>
        <button className="p-2 bg-green-400 text-white rounded-md w-1/2" onClick={() => toggleTodo()}>{item.complete ? "취소" : "완료"}</button>
      </div>
    </div>
  )
}