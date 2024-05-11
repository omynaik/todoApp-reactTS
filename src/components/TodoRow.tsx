import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";

interface Props {
  task: string;
  completeTask(taskNameToDelete: string): void;
}

const TodoRow: React.FC<Props> = ({ task, completeTask }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-row gap-2 pb-4 justify-between"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <div className="self-center">Task: {task}</div> */}
      <Checkbox label={task} />
      {/* <button
        className="bg-green-500 rounded-lg text-white p-2 px-4"
        onClick={() => {
          completeTask(task);
        }}
      >
        X
      </button> */}
      {isHovered && (
        <Button variant="small" onClick={() => completeTask(task)}>
          X
        </Button>
      )}
    </div>
  );
};

export default TodoRow;
