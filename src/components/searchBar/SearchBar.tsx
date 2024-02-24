import SearchButton from "../searchBtn/searchBtn";

interface Props {
  example: string;
}

//для ввода и отправки поисковых запросов пользователей
const SearchBar = ({ example }: Props) => (
  <div className="searchBar">
    <div className="searchBar__area">
      <input type="text" placeholder="Найдется всё. Например, фаза луны сегодня" />
      <SearchButton>
        Найти
      </SearchButton>
    </div>
    <div className="searchBar__help">Найдется все, напрмер, <a href="#">{example}</a></div>
  </div>
)

export default SearchBar