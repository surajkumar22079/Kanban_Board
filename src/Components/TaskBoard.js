import React, { useState } from "react";
import TaskGroup from "./Groupings";
import "./Card.css"
import options from "../images/options.png"
import down from "../images/down-arrow.png"

const TaskBoard = ({ data }) => {
  const [groupingAttribute, setGroupingAttribute] = useState(null);
  const [sortingAttribute, setSortingAttribute] = useState(null);

  const groupTasksByAttribute = (attribute) => {
    const groupedTasks = {};
    data.tickets.forEach(task => {
      const groupValue = task[attribute];
      if (!groupedTasks[groupValue]) {
        groupedTasks[groupValue] = [];
      }
      groupedTasks[groupValue].push(task);
    });
    return groupedTasks;
  };
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="task-board">
      <div className="disp_option">
        <button onClick={handleButtonClick} className="dispbtn">
          <img src={options} alt="" />
          <p>Display</p>
          <img src={down} alt="" />
        </button>
        {showDiv && <div className="dispDiv">
          <div className="grpsrt">
            <label htmlFor="groupingSelect">Grouping </label>
            <select id="groupingSelect" onChange={(e) => setGroupingAttribute(e.target.value)}>
              {/* <option value="">Select Grouping</option> */}
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="grpsrt">
            <label htmlFor="sortingSelect">Ordering </label>
            <select id="sortingSelect" onChange={(e) => setSortingAttribute(e.target.value)}>
              {/* <option value="">Select Sorting</option> */}
              <option value="title">Title</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
        }
      </div>

      {groupingAttribute && sortingAttribute && (
        <div className="groupDiv">
          {Object.entries(groupTasksByAttribute(groupingAttribute)).map(([group, tasks]) => (
            <TaskGroup
              key={`${groupingAttribute}-${group}`}
              groupingAttribute={groupingAttribute}
              group={group}
              tasks={tasks}
              sortAttribute={sortingAttribute}
              users={data.users}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskBoard;


