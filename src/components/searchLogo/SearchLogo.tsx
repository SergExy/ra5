interface Props {
  logo: string;
}

//для отображения логотипа сайта
const SearchLogo = ({ logo }: Props) => (
  <div className='searchLogo'>
    <img src={logo} />
  </div>
)

export default SearchLogo