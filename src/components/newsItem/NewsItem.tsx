import { ReactNode } from "react";

interface Props {
  icon: string;
  children: ReactNode;
}

//для отображения отдельных новостных элементов
const NewsItem = ({ icon, children }: Props) => {
  return (
    <li className='newsList__item'>
      <div className='newsList__icon'>
        <img src={icon} />
      </div>
      {children}
    </li>
  )
}

export default NewsItem;