import Button from '../../components/button/Button';
import Card from '../../components/card/Card';

import './bootstrap.min.css'
import './cards.css'

import img from './img.png'

const Cards = () => {
  return (
    <div className="cards-container">
      <Card img={img}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Button>Go somewhere</Button>
      </Card>
      <Card>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Button>Go somewhere</Button>
      </Card>
    </div>
  )
}

export default Cards;