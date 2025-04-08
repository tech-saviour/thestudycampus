import AboutUsSection from "@/components/AboutUsSection";
import FAQ from "@/components/FAQ";
import ImageSlider from "@/components/ImageSlider";
import ParentsTestimonials from "@/components/ParentsTestimonials";
import PreschoolPrograms from "@/components/PreschoolPrograms";
import USPsSection from "@/components/USPsSection";


export default function Home() {
  return (
    <div>
      <ImageSlider/>
      <AboutUsSection/>
      <PreschoolPrograms/>
      <USPsSection/>
      <ParentsTestimonials/>
      <FAQ/>
    </div>
  );
}
