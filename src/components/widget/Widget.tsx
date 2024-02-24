import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

//показыват различные виджеты с разной html структурой
const Widget = ({ title, children }: Props) => (
  <div className="widget">
    <div className="widget__title">
      {title}
    </div>
    <div className="widget__body">
      {children}
    </div>
  </div>
)

export default Widget