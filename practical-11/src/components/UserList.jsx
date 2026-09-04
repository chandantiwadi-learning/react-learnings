import { Link } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Chandan Tiwadi",
    age: 20,
    course: "B.Sc IT"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    age: 21,
    course: "BCA"
  },
  {
    id: 3,
    name: "Priya Patel",
    age: 19,
    course: "B.Com"
  },
  {
    id: 4,
    name: "Aman Verma",
    age: 22,
    course: "B.Tech"
  }
];

function UserList() {
  return (
    <div className="container">
      <h1>User List</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;