import NewsItem from '../newsItem/NewsItem';

interface NewsItemInterface {
  icon: string;
  title: string;
}

interface Props {
  newsCategory: string[];
  newsItems: NewsItemInterface[];
}

//для отображения списка новостей
const NewsList = ({ newsCategory, newsItems }: Props) => {
  const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август' , 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  const weekDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']

  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const weekDay = weekDays[date.getDay()];
  const time = date.getHours() + ":" + date.getMinutes();
  return (
    <div>
      <nav>
        {newsCategory.map((item, i) => (
          <a key={i} href='#'>{item}</a>
        ))}
        <span>
          {day} {month}, {weekDay} {time}
        </span>
      </nav>
      <ul className='newsList'>
        {newsItems.map((item, i) => (
          <NewsItem key={i} icon={item.icon}>
            {item.title}
          </NewsItem>
        ))}
      </ul>
    </div>
  )
}
export default NewsList;