import React, { useEffect, useState } from "react";
import TaskCard from "./Card";
import "./Card.css"
import check from "../images/check.png"
import Pending from "../images/circle-loading.png"
import more from "../images/more.png"
import record from "../images/record.png"
import timer from "../images/timer.png"
import warning from "../images/warning.png"
import low_priority from "../images/low_priority.png"
import high_priority from "../images/high_priority.png"
import medium_priority from "../images/medium_priority.png"
import dummy from "../images/dummy_profile.png"
import plus from "../images/plus_sign.png"


const TaskGroup = ({ group, groupingAttribute, tasks, sortAttribute, users }) => {
  const [sortedTasks, setSortedTasks] = useState([]);

  useEffect(() => {
    if (sortAttribute) {
      const sortedTasksCopy = [...tasks];
      if (sortAttribute === 'title') {
        sortedTasksCopy.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortAttribute === 'priority') {
        sortedTasksCopy.sort((a, b) => a.priority - b.priority);
      }
      setSortedTasks(sortedTasksCopy);
    } else {
      setSortedTasks(tasks);
    }
  }, [tasks, sortAttribute]);

  const userID = users.find(user => user.id === `${group}`);
  let title, img;
  const temp = tasks.length;
  if (groupingAttribute === 'userId') {
    title = userID.name;
    img = dummy;
  }
  if (groupingAttribute === 'status') {
    title = group;
    if (group === 'Todo') {
      img = record
    }
    if (group === 'In progress') {
      img = timer
    }
    if (group === 'Backlog') {
      img = Pending
    }
    if (group === 'Done') {
      img = check
    }
    if (group === 'Canceled') {
      img = warning
    }
  }

  if (groupingAttribute === 'priority') {
    if (group === '0') {
      title = "No Priority"
      img = more
    }
    if (group === '1') {
      title = "Low"
      img = low_priority
    }
    if (group === '2') {
      title = "Medium"
      img = medium_priority
    }
    if (group === '3') {
      title = "High"
      img = high_priority
    }
    if (group === '4') {
      title = "Urgent"
      img = warning
    }
  }
  return (
    <div className="task-group">
      <div className="group_title">
        <div className="col-1">
          <img src={img} alt="grp_img" className="group_image" />
          <h4 className="ttl">{title}</h4>
          <h4 className="lngth">{temp}</h4>
        </div>
        <div className="col-2">
            <button className="btn1"><img src={plus} alt="plus_sign" className="plus_more_icon"/></button>
            <button className="btn1"><img src={more} alt="more" className="plus_more_icon"/></button>
        </div>
      </div>
      {sortedTasks.map(task => (
        <TaskCard key={task.id} task={task} users={users} />
      ))}
    </div>
  );
};

export default TaskGroup;