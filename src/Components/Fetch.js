import React, { useEffect, useState } from 'react'  
import Card from './Card';
import dummy_profile from "../images/dummy_profile.png"
import TaskBoard from './TaskBoard';


const Fetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
   
  


     

  return (
    <div>
    {/* <h1>Task Management App</h1> */}
    <TaskBoard data={data} />
  </div>
  )
}

export default Fetch;