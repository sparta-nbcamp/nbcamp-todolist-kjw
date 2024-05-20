import { useState } from 'react'
import TodoItem from "./components/Todo.tsx";
import {Todo} from "./global_types.tsx";

function App() {
  const [todo, setTodo] = useState<Todo[]>([])
  const [id, setId] = useState(0)

  function addTodo() {
    const todoTitle = document.getElementById("todo-title") as HTMLInputElement;
    const todoValue = document.getElementById("todo-value") as HTMLInputElement;

    setTodo([...todo, { id: id, title: todoTitle.value, value: todoValue.value, complete: false }])
    setId(id + 1)

    todoTitle.value = ""
    todoValue.value = ""
  }

  function toggleTodo (id: number) {
    setTodo(todo.map(item => item.id === id ? { ...item, complete: !item.complete } : item))
  }

  function removeTodo (id: number) {
    setTodo(todo.filter(item => item.id !== id))
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4 p-10 min-w-[800px] max-w-[1200px]">
        <h1 className="text-2xl font-bold">[React 5기] 입문주차 개인과제 - 투두리스트</h1>
        <div className="border-2 p-5 rounded-md flex flex-col space-y-4 w-full">
          <div className="flex items-center">
            <label htmlFor="todo-title" className="text-lg w-1/12 text-center">제목 : </label>
            <input id="todo-title" type="text" className="p-2 border-2 rounded-md w-full"/>
          </div>
          <div className="flex items-center">
            <label htmlFor="todo-value" className="text-lg w-1/12 text-center">내용 : </label>
            <input id="todo-value" type="text" className="p-2 border-2 rounded-md w-full"/>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 bg-blue-500 text-white rounded-md w-full" onClick={() => addTodo()}>추가</button>
          </div>
        </div>
        <hr className="w-full border-gray-300"/>
        <div className="flex flex-col space-y-2 w-[60rem]">
          <div className="flex flex-col border-2 p-4 rounded-md">
            <h1 className="text-2xl text-center py-3">해야할 일들</h1>
            <div className="grid grid-cols-3 gap-3">
              {
                todo.filter(item => !item.complete).map((item, index) => (
                  <TodoItem key={index} item={item} toggleTodo={() => toggleTodo(item.id)}
                            removeTodo={() => removeTodo(item.id)}/>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col border-2 p-4 rounded-md">
            <h1 className="text-2xl text-center py-3">완료한 일들</h1>
            <div className="grid grid-cols-3 gap-3">
              {
                todo.filter(item => item.complete).map((item, index) => (
                  <TodoItem key={index} item={item} toggleTodo={() => toggleTodo(item.id)}
                            removeTodo={() => removeTodo(item.id)}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
