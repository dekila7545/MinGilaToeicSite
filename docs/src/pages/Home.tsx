import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import InstructorsSection from "@/components/InstructorsSection";
import ScheduleSection from "@/components/ScheduleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScoreReportsSection from "@/components/ScoreReportsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <AboutSection />
        <InstructorsSection />
        <ScheduleSection />
        <CoursesSection />
        <TestimonialsSection />
        <ScoreReportsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
