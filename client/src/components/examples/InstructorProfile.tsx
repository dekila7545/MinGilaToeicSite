import InstructorProfile from '../InstructorProfile';
import instructorImage from '@assets/generated_images/Director_Mingila_portrait_780e803d.png';

export default function InstructorProfileExample() {
  return (
    <div className="p-6 max-w-4xl">
      <InstructorProfile
        name="민길아 원장"
        title="TOEIC 전문 강사"
        imageSrc={instructorImage}
        credentials={[
          "TOEIC 990점 만점",
          "10년 이상 토익 강의 경력",
          "대기업 출강 다수"
        ]}
        philosophy="학생 한 명 한 명의 목표와 실력에 맞춘 맞춤형 수업을 통해 최단 시간 내 목표 점수 달성을 돕습니다."
        quote="점수는 전략입니다. 올바른 방향으로 공부하면 누구나 목표를 이룰 수 있습니다."
      />
    </div>
  );
}
