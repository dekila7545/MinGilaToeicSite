import ScoreCard from "./ScoreCard";
import score890 from '@assets/generated_images/TOEIC_score_report_890_bbf85ceb.png';
import score825 from '@assets/generated_images/TOEIC_score_report_825_3986f4b0.png';
import scoreSpeaking from '@assets/generated_images/TOEIC_Speaking_score_report_7c573c87.png';
import scoreOpic from '@assets/generated_images/OPIc_score_report_a2a88c47.png';
import { motion } from "framer-motion";

export default function ScoreGallery() {
  const scores = [
    { imageSrc: score890, name: "김○○", score: "890점", duration: "3개월" },
    { imageSrc: score825, name: "이○○", score: "825점", duration: "4개월" },
    { imageSrc: scoreSpeaking, name: "박○○", score: "Level 7", duration: "2개월" },
    { imageSrc: scoreOpic, name: "정○○", score: "IH", duration: "2개월" },
    { imageSrc: score890, name: "최○○", score: "915점", duration: "2개월" },
    { imageSrc: scoreSpeaking, name: "강○○", score: "Level 7", duration: "3개월" },
    { imageSrc: score825, name: "윤○○", score: "850점", duration: "3개월" },
    { imageSrc: scoreOpic, name: "임○○", score: "AL", duration: "3개월" }
  ];

  return (
    <section id="scores" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">성적 인증</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            수강생들의 실제 성적표로 증명된 교육 효과
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {scores.map((score, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ScoreCard {...score} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
