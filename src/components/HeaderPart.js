import Button from '@material-ui/core/Button'

export default function HeaderPart() {

  const onClick = () => {
    console.log('click')
  }


  return (
    <header className='header'>
      <h2>Tasks Tracker</h2>
      <Button variant="contained" color="primary" onClick={onClick}>Add</Button>
    </header>
  )
};

