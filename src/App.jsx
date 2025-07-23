import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import Search from "./pages/Search";
import Filter from "./pages/Filter";
import SearchLocation from "./pages/SearchLocation";
import Notifications from "./pages/Notifications";
import PropertyDetails from "./pages/PropertyDetails";
import Gallery from "./pages/Gallery";
import Language from "./pages/Language";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/search" element={<Search />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/search-locations" element={<SearchLocation />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/property-details" element={<PropertyDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/settings/language" element={<Language />} />
          </Routes>
        </AppLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
