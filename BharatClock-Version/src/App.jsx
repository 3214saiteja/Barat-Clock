import "./App.css";
import Header from "./Components/Header";
import ClockSlogan from "./Components/ClockSloagan";
import CurrentTime from "./Components/CurrrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center className="container">
      <Header></Header>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
