import CourseCard from "./CourseCard";
import { BookOpen, TrendingUp, Target, Mic, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function CoursesSection() {
  const courses = [
    {
      title: "TOEIC 입문반",
      subtitle: "SUNNY 강사 - 기초부터 탄탄하게",
      icon: BookOpen,
      schedule: "주 5회, 하루 120분, 총 20회",
      level: "초급",
      targetAudience: [
        "토익을 처음 공부하시는 분",
        "영어 공부 한지 오래되신 분",
        "중학교 1-2학년 수준 영어",
        "수능 4-5등급 및 이하",
        "목표점수 500점"
      ],
      curriculum: [
        "귀가 뚫리는 LC 강화 훈련",
        "토익 LC/RC 필수 어휘 (하루 20-30개)",
        "시험에 꼭 필요한 문법 (쉽게 무한 반복)",
        "최신기출 베이스 문제풀이",
        "온라인 강의 무료 제공",
        "VOCA정리집, 스터디 플래너 무료",
        "실전모의고사 1회 진행"
      ],
      specialNote: "단어를 정확한 발음으로 읽는 것부터 시작해서 토익 문제풀이까지 체계적으로 학습합니다."
    },
    {
      title: "TOEIC 중급반",
      subtitle: "원장 직강 - 실력 향상의 지름길",
      icon: TrendingUp,
      schedule: "주 5회, 하루 110분, 총 20회 (수업 전/후 스터디 30분)",
      level: "중급",
      targetAudience: [
        "수능 3-4등급",
        "토익 400-600점 미만 (특히 RC 200대)",
        "목표점수 650점 이상"
      ],
      curriculum: [
        "LC 단서문장 찾는 훈련을 통한 고득점 비법",
        "최신기출 어휘 30-40개 암기 (단어 짝 암기로 PART 5,6 어휘 빠른 풀이)",
        "핵심 문법 정리로 해석 없이 문제 푸는 스킬",
        "최신 기출 자료 실전문제풀이",
        "1:1 강사 집중관리 (개별 상담 및 취약점 개선)",
        "온라인 강의 무료제공",
        "VOCA정리집, 오답노트, 스터디 플래너 무료",
        "실전모의고사 1회 진행"
      ],
      specialNote: "민길아 원장 직강으로 1:1 집중 관리를 통해 개개인의 취약점을 개선합니다."
    },
    {
      title: "TOEIC 문제풀이반",
      subtitle: "원장 직강 - 고득점 달성",
      icon: Target,
      schedule: "주 5회, 하루 80분, 총 20회 (수업 전/후 스터디 30분-1시간)",
      level: "고급",
      targetAudience: [
        "수능 2등급 이상",
        "토익 650점 이상 (RC 300점 이상)",
        "본 학원 중급 과정 수료자",
        "목표점수 750점 이상"
      ],
      curriculum: [
        "매일 VOCA 암기 및 테스트 (기출 단어 설명)",
        "LC 파트별 실전문제풀이",
        "PART 5,6,7 최신기출변형 문제풀이 (매일)",
        "1:1 강사 집중 관리 (맞춤 추가 과제 제공)",
        "온라인 강의 무료제공",
        "실전모의고사 1회 진행",
        "오답노트 작성 및 복습 관리"
      ],
      specialNote: "참관형이 아닌 참여형 수업으로 실전 문제 해결 능력을 극대화합니다."
    },
    {
      title: "TOEIC Speaking",
      subtitle: "시험장에서 답이 술술 나오는 매직탬플릿",
      icon: Mic,
      schedule: "주 5회, 하루 90분 + 수업 후 1시간 스터디",
      level: "초보-고급",
      targetAudience: [
        "TOEIC Speaking 준비생",
        "목표 IM3 이상",
        "발음, 억양, 강세 교정이 필요하신 분",
        "실전 템플릿이 필요하신 분"
      ],
      curriculum: [
        "Part 1: 발음/강세 학습, 지문 끊어 읽기, 1:1 피드백",
        "Part 2: 사진 묘사 템플릿, 동작/상태 표현 연습, 1:1 피드백",
        "Part 3: 주제에 관한 질문, 예상답변 학습, 1:1 피드백",
        "Part 4: 도표 유형별 예상 질문 및 응답 연습, 1:1 피드백",
        "Part 5: 의견 표현하기, 4가지 유형별 템플릿, 1:1 피드백",
        "최신 기출문제 완벽 분석",
        "매일 과제 및 개인 카톡 발음 피드백"
      ],
      specialNote: "파트별 맞춤 템플릿과 1:1 피드백으로 실전 대응력을 완벽하게 준비합니다."
    },
    {
      title: "OPIc",
      subtitle: "체계적인 10일 완성 커리큘럼",
      icon: MessageSquare,
      schedule: "주 5회, 하루 90분 + 수업 전 1시간 스터디",
      level: "초급-고급",
      targetAudience: [
        "OPIc 시험 준비생",
        "목표 IM3-IH 등급",
        "체계적인 스크립트 학습이 필요하신 분",
        "실전 문제 유형 마스터가 필요하신 분"
      ],
      curriculum: [
        "Day 1: 오픽 소개 및 문제 유형별 접근법",
        "선택 토픽 + 돌발 토픽 통합 학습 (집→가구/가전/기술)",
        "기출 문제 기반 실전 문제 학습",
        "스토리텔링을 통한 스크립트 암기",
        "간단하고 명료한 문장 구조 학습",
        "개인 에피소드 첨가한 맞춤 스크립트 제작",
        "Role Play 집중 훈련 (Day 8-10)",
        "매일 과제 및 개인 카톡 피드백"
      ],
      specialNote: "시험 응시 성적 취득 목표의 실전 중심 수업입니다. (영어회화 수업 아님)"
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">강좌 안내</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            목표에 맞는 최적의 프로그램을 선택하세요
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 2 ? "lg:col-span-2 lg:max-w-[calc(50%-0.75rem)]" : ""}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
