# Practical 15: Product Explorer

## Aim
The aim of this practical is to demonstrate how to consume a REST API in a React application. It covers fetching dynamic data, managing application state, handling loading/error states, and implementing search and pagination.

## Objective
This practical serves as an educational introduction to API consumption using React. By interacting with an external data source, we learn to handle asynchronous operations and dynamically update the UI based on the response.

## Technologies Used
- **React** (v18)
- **Vite** (Build Tool)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **REST API** (DummyJSON)

## API Used
This project uses **[DummyJSON](https://dummyjson.com/)**, a free fake REST API for developers.
It does **not** require an API key or authentication, making it perfect for educational purposes.

### API Endpoints Used
- `GET https://dummyjson.com/products?limit=12&skip=0` (Fetch all products with pagination)
- `GET https://dummyjson.com/products/search?q={query}` (Search products by name)
- `GET https://dummyjson.com/products/{id}` (Fetch a single product's details)

## Concepts Demonstrated
1. **`useState` Hook**: Managing products list, search query, loading state, error state, pagination, and selected product state.
2. **`useEffect` Hook**: Fetching initial data when the component mounts and re-fetching when pagination or search changes.
3. **`fetch` API & async/await**: Performing asynchronous HTTP GET requests to the REST API.
4. **Conditional Rendering**: Showing the loading spinner, error messages, empty states, or product details based on the current state.
5. **Pagination**: Calculating skip/limit logic and tracking the current page.
6. **Reusable Components**: Separating the UI into logical, focused components (`ProductCard`, `SearchBar`, `Pagination`).
7. **Service Layer Separation**: Keeping API URLs and fetch logic in a dedicated `services/productApi.js` file instead of cluttering UI components.

## How It Works
The data flow follows this pattern:
1. **React Component** (`App.jsx`) detects a state change (e.g., initial load, page change, or search).
2. → Calls the **API Service** (`productApi.js`).
3. → Makes a `fetch()` request to the **DummyJSON API**.
4. → Receives a **JSON Response** containing product data.
5. → Updates the **React State** (`products`, `totalProducts`, etc.).
6. → Re-renders the **UI** to display the new data.

## How to Run
1. Ensure you have Node.js installed.
2. Navigate to this directory in your terminal:
   ```bash
   cd practical-15
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser to the local URL provided (usually `http://localhost:5173`).

## Expected Output
Upon launching the application, you will see a clean "Product Explorer" interface. 
- It initially displays a grid of 12 products fetched from DummyJSON.
- You can search for specific products using the search bar.
- You can navigate through pages using the "Next" and "Previous" buttons at the bottom.
- Clicking "View Details" on any product card will hide the grid and display detailed information about that specific product.
- Clicking "Back to Products" will return you to the previous view.
