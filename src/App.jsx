import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-shell">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/plants" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
