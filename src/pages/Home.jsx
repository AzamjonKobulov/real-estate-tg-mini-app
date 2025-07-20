import Navbar from "../components/Navbar";
import AdvertisementProperty from "../components/sections/AdvertisementProperty";
import Articles from "../components/sections/Articles";
import FurnishedProperties from "../components/sections/FurnishedProperties";
import Hero from "../components/sections/Hero";
import NearByProperty from "../components/sections/NearByProperty";
import OwnerProperty from "../components/sections/OwnerProperty";
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
      <OwnerProperty />
      <FurnishedProperties />
      <Articles />
    </>
  );
}
