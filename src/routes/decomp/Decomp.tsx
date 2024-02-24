import NewsList from '../../components/newsList/NewsList'
import CurrencyInfo from '../../components/currencyInfo/CurrencyInfo';
import Advertisement from '../../components/advertisement/Advertisement';

import WebIcon from './icon.png'
import Logo from './logo.png'
import './decomp.scss'
import SearchLogo from '../../components/searchLogo/SearchLogo';
import SearchNav from '../../components/searchNav/SearchBar';
import SearchBar from '../../components/searchBar/SearchBar';
import AdvertisementBanner from '../../components/advertisementBanner/AdvertisementBanner';
import Widget from '../../components/widget/Widget';

const Weather = () => (
  <p>+17° Утром +17, днём +20</p>
)

const VisitedLinks = () => (
  <div className="visited-links">
    <a href="#">Недвижимость — о сталинках</a>
  </div>
)

const TvSchedule = () => (
  <ul className="tv-schedule">
    <li>02:00 TNT.Best</li>
  </ul>
)

const Decomp = () => {
  const newsCategory = [
    'Сейчас в СМИ',
    'в Германии',
    'Рекомендуем',
  ]
  const newsItems = [
    { icon: WebIcon, title: 'Путин упростит получение автомобильных номеров' },
    { icon: WebIcon, title: 'В команде Зеленского раскрыли план реформ на Украине' },
    { icon: WebIcon, title: '"Турпомощь" прокомментировал гибель десятков россиян в Анталье' },
    { icon: WebIcon, title: 'Суд закрыл дело Демпартии США против России' },
    { icon: WebIcon, title: 'На Украине призвали создать ракеты для удара по Москве' },
  ];

  const searchLinks = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'ещё'];

  return (
    <>
      <div className="container container-news">
        <div>
          {/* Отображение списка новостей */}
          <NewsList newsCategory={newsCategory} newsItems={newsItems} />

          {/* Отображение информации о валютах */}
          <CurrencyInfo usd="63,52 +0,09" eur="70,86 +0,14" oil="64,90 +1,63%" />
        </div>
        {/* Отображение рекламы */}
        <Advertisement icon={WebIcon} text="Работа над ошибками" comment="Смотрите на Яндексе и запоминайте" />
      </div>
      <div className="container container-search">
        <div>
          <SearchLogo logo={Logo} />
        </div>
        <div>
          <SearchNav searchLinks={searchLinks} />
          <SearchBar example={'фаза луны сегодня'} />
        </div>
      </div>
      <div className="container container-body">
        <AdvertisementBanner banner={WebIcon} title='Форсаж' />
        <div className="widgets">
          <Widget title={'Погода'}>
            <Weather />
          </Widget>
          <Widget title={'Посещаемое'}>
            <VisitedLinks />
          </Widget>
          <Widget title={'Телепрограмма'}>
            <TvSchedule />
          </Widget>
        </div>
      </div>
    </>
  )
}

export default Decomp