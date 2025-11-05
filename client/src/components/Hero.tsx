import { Button } from "@/components/ui/button";
import heroImage from '@assets/generated_images/Modern_academy_classroom_background_9e824a59.png';
import logoGreen from "@assets/1G_1761642841235.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/70 to-white/75" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src={logoGreen} 
            alt="민길아토익학원" 
            className="h-16 md:h-20 lg:h-24 w-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">
          목표 점수 달성을 위한<br />최고의 선택
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-8 leading-relaxed font-medium">
          체계적인 커리큘럼과 전문 강사진의<br className="md:hidden" /> 맞춤형 수업으로 여러분의 성공을 돕겠습니다
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            data-testid="button-hero-contact"
            className="whitespace-nowrap"
          >
            무료 상담 신청하기
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-hero-courses"
            className="whitespace-nowrap"
          >
            강좌 살펴보기
          </Button>
        </div>
      </div>
    </section>
  );
}
