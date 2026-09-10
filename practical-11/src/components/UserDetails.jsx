import { useParams, Link } from "react-router-dom";

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

function UserDetails() {
  const { id } = useParams();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="container">
        <h2>User Not Found</h2>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>User Details</h1>

      <div className="card">
        <h2>{user.name}</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Course:</strong> {user.course}</p>
      </div>

      <Link className="btn" to="/">
        Back to User List
      </Link>
    </div>
  );
}

export default UserDetails;