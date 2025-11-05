import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "신민재",
      course: "TOEIC 문제풀이반",
      duration: "4주",
      score: "950점 달성",
      review: "수강 전에는 토익 공부를 어떻게 시작해야 될지 몰랐는데 아침 일찍 와서 수업을 듣고 단어부터 문법 그리고 독해문제풀이 방법까지 알게 되었습니다. 시원해서 좋았습니다. 교재가 조금 어려웠지만 자신감을 갖게 되었습니다."
    },
    {
      name: "손영빈",
      course: "TOEIC 문제풀이반",
      duration: "4주",
      score: "925점 달성",
      review: "토익 독해와 LC 모두를 가르쳐주는 문제풀이반을 수강하여 부족한 점을 메꾸고 더 나아질 방안을 찾으며 문제풀이가 조금 더 빠르고 정확해졌습니다. 1:1 피드백을 통한 시험풀이나 부족한 부분 탐색은 너무나 필요했습니다. 강사님은 친절하시고 교재는 계속해서 문제 풀이하며 필요한 자료를 제공해주심이 가장 좋은 부분이라 생각합니다. 각자가 필요한 부분을 매꾸어주는 수업이라 더 좋았습니다."
    },
    {
      name: "조영준",
      course: "TOEIC 문제풀이반",
      duration: "4주",
      review: "수강 전에는 막연하게 공부를 했었는데 수강 이후 체계적인 관리와 수업이 끝나고 공부 방식, 피드백과 습관 교정을 해주셔서 너무 좋았던 것 같습니다. 해당 강좌는 문제풀이반으로 토익점수를 단기간에 올릴 수 있는 장점이 있습니다. 기간이 짧지만 그 안에서 기본기를 다지고 실제 시험장에서 활용할 수 있는 기술과 문제풀이 능력을 빨리 올릴 수 있어서 단기간에 점수 올릴 수 있었습니다."
    },
    {
      name: "강예지",
      course: "TOEIC 중급반",
      duration: "4주",
      score: "840점 달성",
      review: "수능이후 영어공부를 하지 않아 토익에 대한 감이 전혀 없었습니다. 특히 LC는 수능영어와 느낌이 달라 좀 헤맸었는데, 푸는 방법에 대한 강의가 많은 도움이 되었습니다. 문법 같은 경우도 풀이시간을 단축하는 팁들을 여러 가지 배울 수 있었고, 실제로도 푸는 시간이 줄어들고 있다고 느꼈습니다. 학원 시설이 깨끗하고 온/습도 조절이 잘 되어있습니다. 교재도 알찬 내용이 많이 들어있고, 토익을 처음 준비하는 사람도 수월하게 공부할 수 있도록 되어 있습니다."
    },
    {
      name: "박서연",
      course: "TOEIC 중급반",
      duration: "4주",
      score: "800점 달성",
      review: "오랜만에 하는 토익 공부라서 성적이 잘 안 나올까봐 걱정한 상태에서 공부를 시작했습니다. 그러나 하루에 정해진 숙제를 빠짐없이 수행하는 과정을 통해 그 시간을 충분히 메울 수 있었습니다. LC, 문법, 독해 빠짐없이 케어 해주셔서 눈에 띄게 구멍이 난 부분이 없는 것 같습니다. 한 달이라는 짧은 시간동안 기초가 잘 잡힌 것 같아서 좋았습니다. 선생님께서 기출문제 중심으로 만드신 교재가 정말 많이 도움되었습니다."
    },
    {
      name: "김현명",
      course: "TOEIC 중급반",
      duration: "4주",
      review: "문제를보고 어떻게 풀어야하는지, RC 수업을 진행할수록 견문이 넓어져 수업이 끝날 때쯤엔 대부분의 PART5를 풀 수 있게 되었습니다. 불과 한 달 전엔 가장 자신없는 파트였지만 지금은 가장 자신있는 파트가 되었습니다. 상당히 체계적입니다. 수업진도가 직장인도 아슬아슬할 정도로 타이트하고 숙제를 다 하고 다음날 수업을 들으면 이해도가 숙제를 안한날보다 압도적으로 높았습니다."
    },
    {
      name: "우지희",
      course: "TOEIC Speaking",
      duration: "2주",
      score: "AL 달성",
      review: "토익스피킹을 수강하며 단기간에 지문에 맞게 대답하는 법을 배울 수 있어서 좋았고, 수업 후 스터디원들과 부족한 부분을 보완할 수 있어서 도움이 많이 되었습니다. 선생님께서 부족한 부분에 대해 상세히 설명해주시고, 본 교재와 더불어 핸디북이 간편해서 도움이 많이 되었습니다!"
    },
    {
      name: "이주형",
      course: "TOEIC Speaking",
      duration: "2주",
      score: "AL 달성",
      review: "강의책이 좋아서 외우기만 해도 돼요. 이전과 달리 영어에 자신감이 생겼고 즐거워요. 강사 선생님이 친절하고 강의가 재미있어요! 자체제작 교재가 공부하기에 좋아요!"
    },
    {
      name: "이나원",
      course: "TOEIC Speaking",
      duration: "2주",
      score: "IH 달성",
      review: "수강 전에는 말 할 때 머뭇거리고 시간 관리가 안됐는데, 학원에서 알려준 템플릿과 1:1 피드백 덕분에 훨씬 자연스럽고 자신있게 답변할 수 있었습니다. 상담을 자세하고 꼼꼼하게 해주시고 교재가 매우 간결하지만 자세하게 나와있어서 좋습니다."
    },
    {
      name: "이중희",
      course: "OPIc",
      duration: "2주",
      score: "IH 달성",
      review: "기본적인 템플릿이 잘 구성되어 있어서 쉽게 접근할 수 있습니다. 이 템플릿에 본인의 이야기를 붙이니 자연스럽게 문장이 완성되었습니다. 그리고 어떻게 시험에서 길고 구조있게 이야기하는 법을 배웠습니다. 템플릿이 잘 짜여있고, 녹음 피드백이 정확하여 고칠 수 있습니다. 유용한 표현을 잘 참조할 수 있습니다."
    },
    {
      name: "원세인",
      course: "OPIc",
      duration: "2주",
      review: "오픽에 관하여 전체적인 흐름도 알게 되었고 선생님이 많은 꿀팁을 주어서 오픽 시험에 자신감이 붙었습니다. 학원 시설도 깔끔하였고 선생님이 오픽 수업 커리큘럼과 수업 후 피드백을 정성스럽게 말해주었습니다. 그리고 시험에 대하여 전반적인 점수오르는 팁도 잘 알려주셨고 교재도 잘 맞춰줘서 수업 후에 자기주도학습도 잘 할 수 있었습니다."
    },
    {
      name: "백종진",
      course: "OPIc",
      duration: "2주",
      review: "수강 전에는 오픽 시험이 어떻게 진행되는지도 몰랐었는데, 수업에서 선생님께서 문제 유형이나 시험 진행 방식 팁들을 구체적으로 알려주셔서 시험 준비하는데 있어 큰 도움이 되었습니다. 특히 관심 분야에 따라 시험 문제가 달라지는데 이런 부분을 걱정할 필요도 없게끔 정해주시고 그에 따라 수업이 진행되어서 정말 도움이 많이 되었습니다. 수업 교재가 주제별로 잘 정리되어 있고, 워크북도 보기 편하게 되어있어서 공부하기 좋았습니다."
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">수강생 후기</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            민길아토익학원 수강생들의 생생한 고득점 후기
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
