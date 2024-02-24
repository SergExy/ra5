interface Props {
  title: string;
  banner: string;
}

//отображает рекламный баннер
const AdvertisementBanner = ({ title, banner }: Props) => (
  <div className="movie-banner">
    <a href="#">
      <img src={banner} alt={title} />
    </a>
  </div>
)

export default AdvertisementBanner