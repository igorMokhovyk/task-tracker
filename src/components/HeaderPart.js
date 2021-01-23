import Button from "./button";

export default function HeaderPart() {

  const onClick = () => {
    console.log('click')
  }


  return (
    <header className='header'>
      <h2>Tasks Tracker</h2>
      <Button color='green' text="Add" onClick={onClick}/>
    </header>
  )
};

