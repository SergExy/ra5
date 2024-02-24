interface Props {
  usd: string;
  eur: string;
  oil: string;
}

//для отображения информации о валютах
const CurrencyInfo = ({ usd, eur, oil }: Props) => (
  <div className='currencyInfo'>
    USD MOEX {usd}, EUR MOEX {eur}, НЕФТЬ {oil}
  </div>
)

export default CurrencyInfo