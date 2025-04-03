import { Homepage, Sidebar } from "./pages/index";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import {
  AboutComponent,
  Contact,
  FacialServices,
  Gallery,
  HairColoring,
  HairSalon,
  KeratinTreatment,
  MenuComponent,
  Nanoplastia,
  WaxingService,
} from "./components/index";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hair-salon" element={<HairSalon />} />
        <Route path="/keratin-treatment" element={<KeratinTreatment />} />
        <Route path="/waxing-services" element={<WaxingService />} />
        <Route path="/hair-color" element={<HairColoring />} />
        <Route path="/nanoplastia-hair-treatment" element={<Nanoplastia />} />

        <Route path="/facial-service" element={<FacialServices />} />
      </Routes>
    </>
  );
}

export default App;
