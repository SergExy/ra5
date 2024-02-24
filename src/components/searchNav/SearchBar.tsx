interface Props {
  searchLinks: string[];
}

//для отображения различных ссылок навигации
const SearchNav = ({ searchLinks }: Props) => (
  <ul className='searchNav'>
    {searchLinks.map((item, i) => <li key={i} className='searchNav__item'><a href='#'>{item}</a></li>)}
  </ul>
)

export default SearchNav