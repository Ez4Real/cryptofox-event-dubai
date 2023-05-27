import {BrowserRouter} from "react-router-dom";
import backgroundImage from './images/back.png'
import {Header} from './components/Header/Header.js';
import {MainInfo} from "./components/MainInfo/MainInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="layout" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Header />
        <div className="container">
          <section className="main-section">
            {/* Main section content */}
          </section>
          <MainInfo></MainInfo>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
