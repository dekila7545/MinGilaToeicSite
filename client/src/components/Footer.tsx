import logoSymbol from "@assets/SG.png";
import logoText from "@assets/TG_1761645119045.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoSymbol} alt="민길아토익학원" className="h-10 w-auto" />
              <img src={logoText} alt="민길아토익학원" className="h-6 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              토익, 토익스피킹, 오픽 전문 교육기관으로<br />
              여러분의 목표 달성을 함께합니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">빠른 링크</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('courses')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-courses"
              >
                강좌안내
              </button>
              <button
                onClick={() => scrollToSection('instructors')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-instructors"
              >
                강사소개
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-testimonials"
              >
                수강후기
              </button>
              <button
                onClick={() => scrollToSection('scores')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-scores"
              >
                성적표
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">문의</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>경남 창원시 성산구 원이대로 587<br />(정우상가) 7층</p>
              <p>
                <a href="tel:055-275-5777" className="hover:text-primary transition-colors">
                  055-275-5777
                </a>
              </p>
              <p>
                <a href="mailto:kiltoeic@naver.com" className="hover:text-primary transition-colors">
                  kiltoeic@naver.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 민길아토익학원. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            사업자등록번호: 528-91-00020 | 대표: 민길아
          </p>
        </div>
      </div>
    </footer>
  );
}
