import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./Components/Router/Routing";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import "./Components/Shared/css/common.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
