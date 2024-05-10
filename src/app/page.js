
import Care from "@/components/care/Care";
import Groomers from "@/components/groomers/Groomers";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";
import Services from "@/components/services/Services";
import WhatWeDo from "@/components/whatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Services />
      <Groomers />
      <Pricing />
      <Care/>
  </>
  );
}
