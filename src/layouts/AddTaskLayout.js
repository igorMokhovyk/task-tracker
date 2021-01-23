export default function AddTaskForm({name, placeholder, className, type}) {

  return (
    <div className={className}>
      <label>{name}</label>
      <input type={type} placeholder={placeholder}/>
    </div>
  )
};





