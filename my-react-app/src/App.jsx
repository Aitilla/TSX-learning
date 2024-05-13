import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Spongebob" age={20} isStudent={true}/>
      <Student name="Patric" age={26} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={19} isStudent={true}/>
      <Student name="Larry"/>
    </>
  );
}

export default App;
