import PropTypes from 'prop-types'

const Button = ({text, color}) => {
  return (
    <button className='btn' style={{backgroundColor: color}}>
      {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    colot: PropTypes.string,
}

export default Button
