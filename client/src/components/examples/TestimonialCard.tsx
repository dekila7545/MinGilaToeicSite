import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="p-6 max-w-md">
      <TestimonialCard
        name="김○○"
        course="TOEIC"
        duration="3개월"
        score="650 → 890"
        review="처음에는 650점에서 시작했는데, 민길아 원장님의 체계적인 커리큘럼 덕분에 3개월 만에 890점을 달성했습니다. 파트별 전략이 정말 효과적이었어요!"
      />
    </div>
  );
}
