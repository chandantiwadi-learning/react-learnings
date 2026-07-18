import "./App.css";

function Card(props) {
    return (
        <div className="card">

            <h2>Student ID</h2>

            <div className="info">
                <span>Name</span>
                <span>{props.name}</span>
            </div>

            <div className="info">
                <span>Email</span>
                <span>{props.email}</span>
            </div>

            <div className="info">
                <span>Roll No</span>
                <span>{props.rollNo}</span>
            </div>

            <div className="info">
                <span>Class</span>
                <span>{props.className}</span>
            </div>

            <div className="info">
                <span>Phone</span>
                <span>{props.phoneNo}</span>
            </div>

        </div>
    );
}

export default Card;