import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFull from "@assets/TG.png";
import logoSymbol from "@assets/SG.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="px-3 py-2 rounded-md flex items-center gap-3"
            data-testid="link-home"
          >
            <img 
              src={logoSymbol} 
              alt="민길아토익학원 심볼" 
              className="h-10 w-auto md:hidden"
            />
            <span className="text-2xl font-black hidden md:flex">
              {['민', '길', '아', '토', '익', '학', '원'].map((char, index) => (
                <span
                  key={index}
                  className="inline-block bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent animate-popup"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('about')}
              data-testid="link-about"
            >
              학원소개
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('instructors')}
              data-testid="link-instructors"
            >
              강사소개
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('courses')}
              data-testid="link-courses"
            >
              강좌안내
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('schedule')}
              data-testid="link-schedule"
            >
              강의시간표
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('testimonials')}
              data-testid="link-testimonials"
            >
              수강후기
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('score-reports')}
              data-testid="link-scores"
            >
              성적표
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('contact')}
              data-testid="link-contact"
            >
              연락처
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection('contact')}
              data-testid="button-cta"
            >
              상담문의
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="justify-start"
              data-testid="link-about-mobile"
            >
              학원소개
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('instructors')}
              className="justify-start"
              data-testid="link-instructors-mobile"
            >
              강사소개
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('courses')}
              className="justify-start"
              data-testid="link-courses-mobile"
            >
              강좌안내
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('schedule')}
              className="justify-start"
              data-testid="link-schedule-mobile"
            >
              강의시간표
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('testimonials')}
              className="justify-start"
              data-testid="link-testimonials-mobile"
            >
              수강후기
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('score-reports')}
              className="justify-start"
              data-testid="link-scores-mobile"
            >
              성적표
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              className="justify-start"
              data-testid="link-contact-mobile"
            >
              연락처
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              data-testid="button-cta-mobile"
            >
              상담문의
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
