import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import Search from "./pages/Search";
import Filter from "./pages/Filter";
import SearchLocation from "./pages/SearchLocation";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/search-locations" element={<SearchLocation />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
