import "./list.css";
import { useState } from "react";
import Item from "../Item/Item";

function List() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [complete, setComplete] = useState([]);
  const [creationTime, setCreationTime] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setComplete([...complete, false]);
      setCreationTime([...creationTime, new Date()]);
      setTask("");
    }
  };

  const completeTask = (index) => {
    const updatedStatus = [...complete];
    updatedStatus[index] = !updatedStatus[index];
    setComplete(updatedStatus);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    const newCreationTime = creationTime.filter((_, i) => i !== index);
    setCreationTime(newCreationTime);
  };

  return (
    <>
      <div className="Task">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Note"
        />
        <button onClick={addTask}>+</button>
      </div>

      <ul>
        {tasks.map((task, index) => {
          return (
            <Item
              key={index}
              task={task}
              time={creationTime[index]}
              complete={complete[index]}
              completeTask={() => completeTask(index)}
              removeTask={() => removeTask(index)}
            />
          );
        })}
      </ul>
    </>
  );
}

export default List;
