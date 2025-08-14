import './Button.css'

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled,
  type = 'button',
  className = ''
}) => {
  return (
    <button
      className={`btn ${variant} ${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}