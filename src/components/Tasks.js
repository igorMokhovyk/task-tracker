import {useState} from 'react';



export default function Tasks() {

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])


  return (
    <>
      {tasks.map(el => (<h1 key={el.id}>{el.text}</h1>))}
    </>
  );
};
