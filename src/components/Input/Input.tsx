
type InputProps = {
  type?: string
  className: string
  placeholder?: string
  disabled?: boolean
  id?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ type='text', className, placeholder, id, value, disabled, onChange }: InputProps) => {
  return (
    <input 
      type={type} 
      className={className} 
      placeholder={placeholder} 
      disabled={disabled} 
      value={value}
      id={id}
      onChange={onChange} />
  )
}