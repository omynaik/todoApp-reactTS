import React, { useState } from "react";
import TodoRow from "./components/TodoRow";
import Button from "./components/Button";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    setTodoList((prev) => [...prev, task]);
    console.log(todoList);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task != taskNameToDelete;
      })
    );
  };

  return (
    <div className="bg-yellow-50 h-[100vh] pt-4 flex flex-col items-center shadow-md">
      <div className="bg-white w-[30%] p-6 rounded-lg shadow-md">
        <div className="text-xl font-semibold mb-4 text-center">Todo</div>
        <div className="w-full border-b border-gray-300">
          {todoList.map((task: string, key: number) => {
            return (
              <TodoRow key={key} task={task} completeTask={completeTask} />
            );
          })}
        </div>
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Add task here..."
            className="p-2 w-full rounded-lg border-2 border-solid border-slate-150 outline-none bg-slate-100"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <Button variant="big" onClick={addTask}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
