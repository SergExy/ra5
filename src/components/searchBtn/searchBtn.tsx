import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

//для инициирования поиска при нажатии
const SearchButton = ({ children }: Props) => <button type="submit">{children}</button>; // Кнопка "Найти" для запуска поиска

export default SearchButton