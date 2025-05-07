import type { ReactNode } from "react"

type propsButton = {
  text?: string
  type?: "submit" | "reset" | "button"
  className: string
  disable?: boolean
  icon?: ReactNode
  onClick?: () => void
}

const Button = ({ type="button", text, className, icon, disable, onClick }: propsButton ) => {
  return (
    <button 
      className={className}
      type={type}
      disabled={disable}
      onClick={onClick}
    >
      {icon}{text}
    </button>
  )
}

export default Button