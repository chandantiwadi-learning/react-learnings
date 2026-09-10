# Practical 14 — User Directory

## Question
"Create an app that fetches and displays user data from a public API (e.g., JSONPlaceholder or Reqres)."

## Aim
This practical demonstrates how to fetch and display user data from a public REST API using React.

## Objective
To understand and implement basic API integration in a React application, effectively handling asynchronous data fetching, state management, and UI rendering.

## API Used
**JSONPlaceholder**
- URL: [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
- Endpoint: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

This API is publicly available for learning and testing and does not require an API key.

## Technologies Used
- React
- Vite
- JavaScript
- HTML
- CSS
- REST API (JSONPlaceholder)

## React Concepts Used
- Functional Components
- `useState()`
- `useEffect()`
- Props
- `map()` for list rendering
- Conditional Rendering (loading, errors, empty states)
- `fetch()` and `async/await`
- API error handling

## How the Application Works
1. When the `App` component mounts, `useEffect()` automatically runs.
2. The API request is sent to JSONPlaceholder using `fetch()`.
3. The server returns JSON data, which is parsed into a JavaScript array.
4. The user data is stored in the application state using `useState()`.
5. If the request is successful, `UserCard` components are rendered dynamically using `.map()`.
6. Loading and error states are correctly displayed while the request is running or if it fails.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Expected Output
The application should display a responsive, card-based interface containing the list of users retrieved from the JSONPlaceholder API. A search bar is available to filter the users by name, username, or email.
