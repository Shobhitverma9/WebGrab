import { Hero } from "@/components/ui/Hero";
import { Services } from "@/components/ui/Services";
import { Journey } from "@/components/ui/Journey";
import { Projects } from "@/components/ui/Projects";
import { CTA } from "@/components/ui/CTA";
import { DoctorDemo } from "@/components/ui/DoctorDemo";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Journey />
      <Projects />
      <DoctorDemo />
      <CTA />
    </>
  );
}
