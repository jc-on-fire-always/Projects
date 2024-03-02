import "./App.css";
import AppName from "./Components/AppName";
import CurrentTime from "./Components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import Slogan from "./Components/Slogan";

function App() {
  return (
    <center>
      <AppName />
      <Slogan />
      <CurrentTime />
    </center>
  );
}

export default App;
