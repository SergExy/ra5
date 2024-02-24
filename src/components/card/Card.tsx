import { ReactNode } from "react"

interface Props {
  img?: string,
  children: ReactNode,
}

const Card = ({ img, children }: Props) => {
  return (
    <div className="card">
      {img && (
        <img src={img} className="card-img-top" />
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Card