import Navbar from "../components/Navbar";
import AdvertisementProperty from "../components/sections/AdvertisementProperty";
import Hero from "../components/sections/Hero";
import NearByProperty from "../components/sections/NearByProperty";
import Properties from "../components/sections/Properties";
import SelectBudget from "../components/sections/SelectBudget";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Properties />
      <AdvertisementProperty />
      <NearByProperty />
      <SelectBudget />
    </>
  );
}
