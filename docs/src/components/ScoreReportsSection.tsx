import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import score001 from "@assets/001_1761901293046.png";
import score002 from "@assets/002_1761901293047.png";
import score003 from "@assets/003_1761901293047.png";
import score004 from "@assets/004_1761901293049.png";
import score005 from "@assets/005_1761901293050.png";
import score006 from "@assets/006_1761901293051.png";
import score007 from "@assets/007_1761901293052.png";
import score008 from "@assets/008_1761901293053.png";
import score009 from "@assets/009_1761901293053.png";
import score010 from "@assets/010_1761901293054.png";
import score011 from "@assets/011_1761901293055.png";
import score012 from "@assets/012_1761901293056.png";
import score013 from "@assets/013_1761901293057.png";
import score014 from "@assets/014_1761901293057.png";
import score015 from "@assets/015_1761901293058.png";
import score016 from "@assets/016_1761901293059.png";

interface ScoreReport {
  id: string;
  image: string;
  studentName: string;
  duration: string;
  category: string;
}

const scoreReports: ScoreReport[] = [
  // TOEIC 문제풀이반
  { id: "001", image: score001, studentName: "김*지", duration: "4주", category: "TOEIC 문제풀이반" },
  { id: "002", image: score002, studentName: "신*재", duration: "2개월", category: "TOEIC 문제풀이반" },
  { id: "003", image: score003, studentName: "김*은", duration: "4주", category: "TOEIC 문제풀이반" },
  { id: "004", image: score004, studentName: "임*우", duration: "4주", category: "TOEIC 문제풀이반" },
  { id: "005", image: score005, studentName: "손*빈", duration: "2개월", category: "TOEIC 문제풀이반" },
  { id: "006", image: score006, studentName: "장*현", duration: "4주", category: "TOEIC 문제풀이반" },
  { id: "007", image: score007, studentName: "정*영", duration: "4주", category: "TOEIC 문제풀이반" },
  { id: "008", image: score008, studentName: "박*정", duration: "4주", category: "TOEIC 문제풀이반" },
  // TOEIC Speaking
  { id: "009", image: score009, studentName: "김*성", duration: "2주", category: "TOEIC Speaking" },
  { id: "010", image: score010, studentName: "박*원", duration: "2주", category: "TOEIC Speaking" },
  { id: "011", image: score011, studentName: "도*연", duration: "2주", category: "TOEIC Speaking" },
  { id: "012", image: score012, studentName: "우*희", duration: "2주", category: "TOEIC Speaking" },
  // OPIc
  { id: "013", image: score013, studentName: "최*혁", duration: "2주", category: "OPIc" },
  { id: "014", image: score014, studentName: "이*희", duration: "2주", category: "OPIc" },
  { id: "015", image: score015, studentName: "김*진", duration: "2주", category: "OPIc" },
  { id: "016", image: score016, studentName: "박*현", duration: "2주", category: "OPIc" },
];

export default function ScoreReportsSection() {
  return (
    <section id="score-reports" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">
            성적 인증
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            수강생들의 실제 성적 향상 결과입니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scoreReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card 
                className="overflow-hidden hover-elevate"
                data-testid={`card-score-report-${report.id}`}
              >
                <div className="aspect-[4/3] relative bg-muted">
                  <img
                    src={report.image}
                    alt={`${report.studentName} ${report.category} 성적표`}
                    className="w-full h-full object-cover"
                    data-testid={`img-score-report-${report.id}`}
                  />
                </div>
                <div className="p-4">
                  <h3 
                    className="font-semibold text-lg mb-1" 
                    data-testid={`text-student-name-${report.id}`}
                  >
                    {report.studentName}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground mb-1"
                    data-testid={`text-category-${report.id}`}
                  >
                    {report.category}
                  </p>
                  <p 
                    className="text-sm text-muted-foreground"
                    data-testid={`text-duration-${report.id}`}
                  >
                    수강기간: {report.duration}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
