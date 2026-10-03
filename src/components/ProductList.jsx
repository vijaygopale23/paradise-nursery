import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import snakePlant from '../assets/plants/snake-plant.svg'
import zzPlant from '../assets/plants/zz-plant.svg'
import peaceLily from '../assets/plants/peace-lily.svg'
import spiderPlant from '../assets/plants/spider-plant.svg'
import rubberPlant from '../assets/plants/rubber-plant.svg'
import aloeVera from '../assets/plants/aloe-vera.svg'
import monstera from '../assets/plants/monstera.svg'
import philodendron from '../assets/plants/philodendron.svg'
import pothos from '../assets/plants/pothos.svg'
import calathea from '../assets/plants/calathea.svg'
import fiddleLeafFig from '../assets/plants/fiddle-leaf-fig.svg'
import chineseMoneyPlant from '../assets/plants/chinese-money-plant.svg'
import jadePlant from '../assets/plants/jade-plant.svg'
import stringOfPearls from '../assets/plants/string-of-pearls.svg'
import echeveria from '../assets/plants/echeveria.svg'
import haworthia from '../assets/plants/haworthia.svg'
import burrosTail from '../assets/plants/burros-tail.svg'
import zebraHaworthia from '../assets/plants/zebra-haworthia.svg'

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air Purifying',
    price: 29,
    image: snakePlant,
    description: 'Architectural foliage that stays calm and easy to maintain.',
  },
  {
    id: 2,
    name: 'ZZ Plant',
    category: 'Air Purifying',
    price: 34,
    image: zzPlant,
    description: 'Glossy leaves for a polished, low-light-friendly display.',
  },
  {
    id: 3,
    name: 'Peace Lily',
    category: 'Air Purifying',
    price: 31,
    image: peaceLily,
    description: 'Elegant white blooms that soften a bright indoor corner.',
  },
  {
    id: 4,
    name: 'Spider Plant',
    category: 'Air Purifying',
    price: 26,
    image: spiderPlant,
    description: 'A cheerful, arching favorite that brings a fresh look.',
  },
  {
    id: 5,
    name: 'Rubber Plant',
    category: 'Air Purifying',
    price: 38,
    image: rubberPlant,
    description: 'Broad, deep green leaves that make a bold statement.',
  },
  {
    id: 6,
    name: 'Aloe Vera',
    category: 'Air Purifying',
    price: 24,
    image: aloeVera,
    description: 'Easygoing and practical, with soothing green leaves.',
  },
  {
    id: 7,
    name: 'Monstera',
    category: 'Statement Foliage',
    price: 42,
    image: monstera,
    description: 'Iconic split leaves for a lush tropical feel.',
  },
  {
    id: 8,
    name: 'Philodendron',
    category: 'Statement Foliage',
    price: 36,
    image: philodendron,
    description: 'Vining foliage with rich leaves and soft texture.',
  },
  {
    id: 9,
    name: 'Pothos',
    category: 'Statement Foliage',
    price: 28,
    image: pothos,
    description: 'A trailing beauty perfect for shelves and hanging pots.',
  },
  {
    id: 10,
    name: 'Calathea',
    category: 'Statement Foliage',
    price: 39,
    image: calathea,
    description: 'Layered stripes and delicate patterns for refined interiors.',
  },
  {
    id: 11,
    name: 'Fiddle Leaf Fig',
    category: 'Statement Foliage',
    price: 47,
    image: fiddleLeafFig,
    description: 'Tall, sculptural leaves that instantly elevate a room.',
  },
  {
    id: 12,
    name: 'Chinese Money Plant',
    category: 'Statement Foliage',
    price: 33,
    image: chineseMoneyPlant,
    description: 'A bright, playful favorite with coin-like leaves.',
  },
  {
    id: 13,
    name: 'Jade Plant',
    category: 'Succulents & Cacti',
    price: 27,
    image: jadePlant,
    description: 'A classic succulent with rich, rounded leaves.',
  },
  {
    id: 14,
    name: 'String of Pearls',
    category: 'Succulents & Cacti',
    price: 23,
    image: stringOfPearls,
    description: 'Trailing pearls that soften and dangle beautifully.',
  },
  {
    id: 15,
    name: 'Echeveria',
    category: 'Succulents & Cacti',
    price: 22,
    image: echeveria,
    description: 'Rose-shaped rosettes with a modern, sculptural appeal.',
  },
  {
    id: 16,
    name: 'Haworthia',
    category: 'Succulents & Cacti',
    price: 21,
    image: haworthia,
    description: 'Tiny striped leaves that create a striking desktop display.',
  },
  {
    id: 17,
    name: "Burro's Tail",
    category: 'Succulents & Cacti',
    price: 25,
    image: burrosTail,
    description: 'A trailing succulent with soft, cascading stems.',
  },
  {
    id: 18,
    name: 'Zebra Haworthia',
    category: 'Succulents & Cacti',
    price: 24,
    image: zebraHaworthia,
    description: 'Bold zebra-like stripes that stand out anywhere.',
  },
]

const categories = [
  { title: 'Air Purifying', items: products.filter((plant) => plant.category === 'Air Purifying') },
  { title: 'Statement Foliage', items: products.filter((plant) => plant.category === 'Statement Foliage') },
  { title: 'Succulents & Cacti', items: products.filter((plant) => plant.category === 'Succulents & Cacti') },
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const cartIds = new Set(cartItems.map((item) => item.id))

  return (
    <main className="page-shell product-page">
      <section className="page-intro">
        <p className="eyebrow">Shop the collection</p>
        <h1>Bring home your next favorite plant</h1>
        <p>
          Thoughtfully chosen favorites for every room, style, and level of plant care.
        </p>
      </section>

      {categories.map((category) => (
        <section key={category.title} className="category-section">
          <h2>{category.title}</h2>
          <div className="product-grid">
            {category.items.map((plant) => {
              const added = cartIds.has(plant.id)

              return (
                <article key={plant.id} className="product-card">
                  <img src={plant.image} alt={plant.name} className="product-image" />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="product-meta">
                      <span className="price">${plant.price}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="add-to-cart-button"
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={added}
                  >
                    {added ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  )
}

export default ProductList
