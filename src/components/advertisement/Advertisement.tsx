interface Props {
  icon: string;
  text: string;
  comment: string;
}

//для отображения рекламы или другого промо-контента
const Advertisement = ({ icon, text, comment }: Props) => (
  <div className='advertisement'>
    <div className='advertisement__icon'>
      <img src={icon} />
    </div>
    {text}
    <span className='advertisement__comment'>{comment}</span>
  </div>
)

export default Advertisement