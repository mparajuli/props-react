import Student from "./Student.jsx";

function App() {
  return (
    <div className="container">
      <Student name="Coding Wizard" age={30} isStudent={false} />
      <Student name="Byte Bard" age={28} isStudent={true} />
      <Student name="Pixel Ninja" age={22} isStudent={true} />
      <Student name="Algo Theorist" age={35} isStudent={false} />
      <Student name="Bot" />
    </div>
  );
}

export default App;
