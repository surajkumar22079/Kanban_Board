import React from 'react'
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

const TaskCard = ({ task, users }) => {
  console.log(users);
  const userID = users.find(user => user.id === task.userId);
  let imgurl;
  let imgpr;
  if (task.status === 'Todo')
    imgurl = record;
  if (task.status === "Backlog")
    imgurl = Pending;
  if (task.status === "In progress")
    imgurl = timer;
  if (task.status === "Done")
    imgurl = check;
  if (task.status === "cancelled")
    imgurl = check;


  if (task.priority === 0)
    imgpr = more;
  if (task.priority === 1)
    imgpr = low_priority;
  if (task.priority === 2)
    imgpr = medium_priority;
  if (task.priority === 3)
    imgpr = high_priority;
  if (task.priority === 4)
    imgpr = warning;

  return (
    <div className=' card-container'>
      <div className="row-1 card-row">
        <h3 className='id'>{task.id}</h3>
        <img src={dummy} alt="" className='profile_pic' />
      </div>
      <div className="row-2 card-row">
        <img src={imgurl} alt="" />
        <h3 className='title overme'>{task.title}</h3>
      </div>
      <div className="row-3 card-row">
        <img src={imgpr} alt="" />
        <div className = "row-3-col-2">
          <div className="dot"></div>
          <h3 className='tag'>{task.tag}</h3>
        </div>
      </div>
    </div> 
    )
};

export default TaskCard;