import CourseCard from '../CourseCard';
import { BookOpen } from 'lucide-react';

export default function CourseCardExample() {
  return (
    <div className="p-6 max-w-2xl">
      <CourseCard
        title="TOEIC 입문반"
        subtitle="기초부터 탄탄하게"
        icon={BookOpen}
        schedule="주 5회, 하루 120분, 총 20회"
        level="초급"
        targetAudience={[
          "토익을 처음 공부하시는 분",
          "영어 공부 한지 오래되신 분",
          "목표점수 450점 이상"
        ]}
        curriculum={[
          "귀가 뚫리는 LC 강화 훈련",
          "토익 LC/RC 필수 어휘 (하루 20-30개)",
          "최신기출 베이스 문제풀이"
        ]}
        specialNote="캐나다 출신 강사님이 단어를 정확한 발음으로 읽을 수 있도록 지도합니다."
      />
    </div>
  );
}
