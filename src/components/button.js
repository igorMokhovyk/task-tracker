import PropTypes from 'prop-types';


export default function Button({color, text, onClick}) {


  return (
    <div>
      <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}
