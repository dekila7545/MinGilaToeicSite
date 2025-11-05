import { motion } from "framer-motion";
import { Target, Heart, Users } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "미래에 대한 비전을 주는 학원",
      description: "단기 성적 향상뿐만 아니라, 영어 실력을 통해 취업·이직·승진 등 인생의 다음 단계를 준비할 수 있도록 돕습니다."
    },
    {
      icon: Heart,
      title: "오고 싶은 학원",
      description: (
        <>
          단순한 학원이 아닌, 서로의 성장을 응원하는<br />
          소통의 커뮤니티로서 학생들과 함께<br />
          웃고 배우는 공간을 지향합니다.<br />
          또한 다양한 이벤트와 커뮤니티 활동을 통해<br />
          학업·취업·업무로 지쳐있는 학생들에게<br />
          재미와 따뜻한 에너지를 전해드립니다.
        </>
      )
    },
    {
      icon: Users,
      title: "나눔을 실천하는 학원",
      description: (
        <>
          학업뿐 아니라 멘토링, 사회공헌 프로그램 등을<br />
          통해 학생들과 함께 성장하고, 지역사회 및<br />
          해외아동 후원을 통해 선한 영향력을<br />
          전하고있습니다.
        </>
      )
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">
            학원 소개
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-foreground leading-relaxed">
            <p className="text-lg font-semibold">안녕하세요.</p>
            <p className="text-lg font-semibold">민길아토익학원입니다.</p>
            <p className="text-base text-muted-foreground">
              2015년 개원 이래, 민길아토익학원은 학생들과 함께 성장하며 신뢰와 성과로 증명된<br />
              토익, 토익스피킹, 오픽 전문 학원으로 자리 잡았습니다.
            </p>
            <p className="text-base text-muted-foreground">
              저희 학원은 단순히 토익, 토익스피킹, 오픽 점수만 올리는 곳이 아니라,<br />
              학생 한 명 한 명의 '미래'를 함께 설계하는 공간입니다.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">
            학원의 핵심 가치
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border hover-elevate"
              data-testid={`value-card-${index}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold leading-tight">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
