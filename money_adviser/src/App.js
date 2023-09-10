import InvestmentForm from "./components/InvestmentForm";
import Body2 from "./components/body2";
import Body3 from "./components/body3";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SilverClub from "./components/SilverClub";
import GoldenClub from "./components/GoldenClub";
import PlatinumClub from "./components/PlatinumClub";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const MainWrapper = () => {
  return (
    <>
      <InvestmentForm />
      <Body2 />
      <Body3 />
    </>
  );
};
//Creating routes here for proper navigation whenever you want 
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path ="/" element={<MainWrapper />} />
          <Route exact path ="/silverclub" element={<SilverClub />} />
          <Route exact path ="/goldenclub" element={<GoldenClub />} />
          <Route exact path ="/platinumclub" element={<PlatinumClub />} />
          
          {/* if soemone enters wrong route or URL pattern  */}
          <Route exact path ="*" element={<MainWrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
