import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { SiNaver, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";

export default function ScheduleSection() {
  const mingilaSchedule = [
    { class: "문제풀이반", time: "9:30-10:50", duration: "80분", price: "28만원" },
    { class: "오전 중급반", time: "11:00-12:50", duration: "110분", price: "35만원" },
    { class: "오후 중급반", time: "18:30-20:20", duration: "110분", price: "35만원" },
    { class: "문제풀이반", time: "20:30-21:30", duration: "60분", price: "22만원" }
  ];

  const sunnySchedule = [
    { class: "입문반", time: "9:30-11:30", duration: "120분", price: "35만원" },
    { class: "토익스피킹", time: "18:30-20:00", duration: "90분", price: "28만원" },
    { class: "오픽", time: "20:00-21:30", duration: "90분", price: "35만원" }
  ];

  return (
    <section id="schedule" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">
            강의 시간표
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            수강료 및 수업 시간 안내
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full" data-testid="schedule-mingila">
              <CardHeader>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">
                  민길아 원장
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mingilaSchedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/50 hover-elevate"
                      data-testid={`mingila-class-${index}`}
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-sm mb-1">{item.class}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{item.time} ({item.duration})</span>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-primary">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary">*</span> 할인 전 금액
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full" data-testid="schedule-sunny">
              <CardHeader>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">
                  SUNNY 강사
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sunnySchedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/50 hover-elevate"
                      data-testid={`sunny-class-${index}`}
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-sm mb-1">{item.class}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{item.time} ({item.duration})</span>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-primary">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary">*</span> 할인 전 금액
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-lg p-6 border"
          data-testid="discount-info"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">*</span>
            할인 안내
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <p>• <span className="font-semibold text-foreground">상시 할인:</span> 창원대, 경남대, 폴리텍, 마산대 10% 할인</p>
            <p>• <span className="font-semibold text-foreground">친구/가족 동반 등록시:</span> 10% 할인</p>
            <p>• <span className="font-semibold text-foreground">조기등록 할인:</span> 학원 블로그, 인스타 참고</p>
            <p>• <span className="font-semibold text-foreground">창원대, 경남대 공대생 3명 이상 등록시:</span> 14% 할인</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 px-4 sm:px-0"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
            <a
              href="https://blog.naver.com/kiltoeic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 px-6 py-3 md:px-6 md:py-4 rounded-full bg-gradient-to-b from-[#04E56C] to-[#02A047] text-white shadow-lg hover:shadow-xl active:shadow-md hover:translate-y-[-2px] active:translate-y-[1px] transition-all whitespace-nowrap w-full sm:w-auto justify-center"
              data-testid="link-blog"
            >
              <SiNaver className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span className="text-sm md:text-base lg:text-lg font-semibold">
                학원 블로그 <span className="inline-block animate-pulse">CLICK</span>
              </span>
            </a>
            <a
              href="https://www.instagram.com/mingila_toeic/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 px-6 py-3 md:px-6 md:py-4 rounded-full bg-gradient-to-b from-[#f09433] via-[#e6683c] to-[#bc1d3a] text-white shadow-lg hover:shadow-xl active:shadow-md hover:translate-y-[-2px] active:translate-y-[1px] transition-all whitespace-nowrap w-full sm:w-auto justify-center"
              data-testid="link-instagram"
            >
              <SiInstagram className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span className="text-sm md:text-base lg:text-lg font-semibold">
                학원 인스타그램 <span className="inline-block animate-pulse">CLICK</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
