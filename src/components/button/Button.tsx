import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <a href="#" className="btn btn-primary">
      {children}
    </a>
  )
}

export default Button