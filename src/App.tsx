import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './routes/cards/Cards'
import Decomp from './routes/decomp/Decomp'

const HomeLinks = () => (
  <ol>
    <li><Link to={'/ra5/cards'}>Карточки</Link></li>
    <li><Link to={'/ra5/decomp'}>Декомпозиция</Link></li>
  </ol>
)

function App() {
  return (
    <Routes>
      <Route path='/ra5/' element={<HomeLinks />} />
      <Route path='/ra5/cards' element={<Cards />} />
      <Route path='/ra5/decomp' element={<Decomp />} />
    </Routes>
  )
}

export default App
