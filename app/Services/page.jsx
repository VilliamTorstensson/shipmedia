import ServiceWebdev from "../components/ServiceWebdev";
import Faq from "../components/Faq";
import MyWork from "../components/MyWork";
import SmallServices from "../components/SmallServices";

import ServiceHero from "../components/ServiceHero";
export default function Portfolio () {
  return (
    <main className="overflow-x-hidden">
      <ServiceHero />
      
      <ServiceWebdev />
      
      <SmallServices />
      <MyWork />
      <Faq />
    </main>
  )
};