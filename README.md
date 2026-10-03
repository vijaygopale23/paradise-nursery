# Paradise Nursery

## Project Description

Paradise Nursery is a modern React + Redux shopping application for an online plant shop. It contains a welcoming landing page, detailed company information, and a plant catalog with real-time cart updates. The project is designed to look like a polished nursery storefront while demonstrating Redux Toolkit cart management in a practical e-commerce flow.

## Features

- Responsive landing page with a plant-themed hero background
- About Us section with company overview and mission
- Product catalog with 3 categories and 18 plant items
- Add to Cart functionality with Redux state management
- Dynamic cart count in the navigation bar
- Quantity controls and item removal in cart
- Real-time total price updates
- Checkout button with a "Coming Soon" message
- Continue Shopping navigation back to the plant listing

## Technologies

- React
- React Router DOM
- Redux Toolkit
- React Redux
- Vite
- CSS

## Project Structure

```text
paradise-nursery/
├── README.md
├── package.json
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── nursery-background.svg
│   │   └── plants/
│   │       ├── snake-plant.svg
│   │       └── ...
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductList.jsx
│   │   └── CartItem.jsx
│   └── redux/
│       ├── store.js
│       └── CartSlice.jsx
└── node_modules/
```

## Redux Cart Functionality

The shopping cart is powered by Redux Toolkit. The cart stores product information including id, name, price, image, and quantity. Actions support adding items, increasing and decreasing quantity, removing items, and calculating totals.

## Product Categories

The catalog includes at least three categories:

- Air Purifying
- Statement Foliage
- Succulents & Cacti

Each category includes six unique plants, for a total of 18 products.

## How to Install

```bash
npm install
```

## How to Run

```bash
npm run dev
```

Then open the URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Main Pages

- Home
- About Us
- Plants
- Cart

## Assignment Requirements Implemented

This application includes:

- 3+ plant categories
- 6+ plants per category
- Add to Cart with disabled "Added to Cart" state
- Dynamic cart count
- Quantity controls
- Delete/remove functionality
- Total calculation updates
- Checkout message: "Coming Soon"
- Continue Shopping navigation
- Redux Toolkit-based state management

