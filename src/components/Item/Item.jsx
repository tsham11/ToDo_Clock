import "./item.css";
import Trash from "../../assets/trash-can.svg";
import Checked from "../../assets/complete-circle.svg";
import Unchecked from "../../assets/unchecked_circle.svg";

function Item({ complete, task, time, completeTask, removeTask }) {
  const getDateText = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString([], { weekday: "long" });
    }
  };

  const dtt = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <li>
      <div className="task-date">
        <p>{task}</p>
        <p id="tm">
          {getDateText(time)} at {dtt}
        </p>
      </div>

      <div className="icons">
        {complete ? (
          <img src={Checked} alt="complete-circle" onClick={completeTask} />
        ) : (
          <img src={Unchecked} alt="unchecked-circle" onClick={completeTask} />
        )}
        <img src={Trash} alt="trash-can" onClick={removeTask} />
      </div>
    </li>
  );
}

export default Item;
