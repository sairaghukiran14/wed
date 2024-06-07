import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import InvitationCardPage from "./Pages/InvitationCardPage/InvitationCardPage";
import BioDataPage from "./Pages/BioDataPage/BioDataPage";
import NavBar from "./Components/NavBar/NavBar";
import ContactPage from "./Pages/ContactPage/ContactPage";
import IndividualCardPage from "./Pages/IndividualCardPage/IndividualCardPage";
function App() {
  return (
    <div className="mainSection h-full">
      <NavBar />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/invitation" element={<InvitationCardPage />}>
            <Route
              path="/invitation/:id"
              element={<IndividualCardPage />}
            ></Route>
          </Route>
          <Route path="/biodata" element={<BioDataPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
