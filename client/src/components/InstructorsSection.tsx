import InstructorProfile from "./InstructorProfile";
import mingilaImage from '@assets/보정본 (10)_1761638958299.jpg';
import sunnyImage from '@assets/보정본 (12)_1761639543801.jpg';
import { motion } from "framer-motion";

export default function InstructorsSection() {
  return (
    <section id="instructors" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">강사 소개</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            풍부한 경험과 전문성을 갖춘 강사진을 만나보세요
          </p>
        </motion.div>
        
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <InstructorProfile
            name="민길아 원장"
            title="TOEIC 전문 강사"
            imageSrc={mingilaImage}
            credentials={[
              "영어영문학 전공",
              "토익 강의 경력 20년 이상",
              "전 민병철어학원 토익 수석강사",
              "지역대학 토익 설명회 진행",
              "삼성테크윈, 두산중공업, 쉐플러코리아, 두산인프라코어 등 다수 기업 및 병원 출강"
            ]}
            philosophy="학생 한 명 한 명의 목표와 실력에 맞춘 맞춤형 수업을 통해 최단 시간 내 목표 점수 달성을 돕습니다. 체계적인 커리큘럼과 실전 중심의 수업으로 토익 고득점의 길을 안내합니다."
            quote="문법은 쉽게, 점수는 확실하게, 학생관리는 철저하게"
          />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <InstructorProfile
            name="SUNNY 강사"
            title="Speaking 전문 강사"
            imageSrc={sunnyImage}
            credentials={[
              "영어영문학 전공",
              "교육학 석사",
              "TESOL자격증 보유",
              "20년 이상의 강의 경력",
              "전 민병철어학원 토플, 토익스피킹 강사",
              "쉐플러코리아, STX, 두산 인프라코어 등 다수기업 출강"
            ]}
            philosophy="스피킹은 자신감입니다. 원어민 수준의 정확한 발음과 자연스러운 표현을 익혀 실전에서 당당하게 말할 수 있도록 지도합니다. 실전 시뮬레이션과 1:1 피드백으로 완벽하게 준비시켜 드립니다."
            quote="두려움 없이 말할 수 있을 때, 진짜 영어가 시작됩니다."
            reverse
          />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
