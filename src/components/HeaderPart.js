import Button from '@material-ui/core/Button'

export default function HeaderPart(props) {

  const onClick = () => {
    props.addButtonHandler();
  }


  return (
    <header className='header'>
      <h2>Tasks Tracker</h2>
      <Button variant="contained" color={props.showAddOrClose ? "secondary" : "primary"} onClick={onClick}>
        {props.showAddOrClose ? "Close" : "Add"}
      </Button>
    </header>
  )
};

