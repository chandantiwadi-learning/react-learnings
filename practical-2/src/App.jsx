import "./App.css";
import Card from "./card";

function App() {
  const student = {
    name: "Chandan Tiwadi",
    email: "chandan110906@gmail.com",
    rollNo: "59",
    className: "TY Bsc(IT)",
    phoneNo: "8879753917",
  };

  return (
    <div className="app">
      <Card
        name={student.name}
        email={student.email}
        rollNo={student.rollNo}
        className={student.className}
        phoneNo={student.phoneNo}
      />
    </div>
  );
}

export default App;