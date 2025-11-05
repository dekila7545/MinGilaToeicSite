import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { SiKakaotalk } from "react-icons/si";
import { motion } from "framer-motion";

export default function ContactSection() {
  const handleKakaoClick = () => {
    console.log('KakaoTalk channel clicked');
    window.open('https://center-pf.kakao.com/_HRxdSC/chats', '_blank');
  };

  const handleMapClick = () => {
    window.open('https://map.kakao.com/link/map/민길아토익학원,35.2283,128.6808', '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#247373] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent">연락처</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            학원 운영시간 9:30-21:00<br />
            점심시간 14:00-15:00<br />
            15:00-18:00 방문상담 미리 연락주세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">주소</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-address">
                  경남 창원시 성산구 원이대로 587<br />
                  (정우상가) 7층
                </p>
              </div>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">전화</h3>
                <a
                  href="tel:055-275-5777"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-phone"
                >
                  055-275-5777
                </a>
                <p className="text-xs text-muted-foreground mt-1">평일 09:30 - 21:00</p>
                <p className="text-xs text-muted-foreground">(점심시간 14:00 - 15:00)</p>
              </div>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <SiKakaotalk className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">카카오톡 상담</h3>
                <p className="text-sm text-muted-foreground mb-3">빠른 상담을 원하시면 카카오톡으로 문의하세요</p>
                <Button
                  size="sm"
                  onClick={handleKakaoClick}
                  data-testid="button-kakao"
                  className="whitespace-nowrap"
                >
                  카카오톡 채널 바로가기
                </Button>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.9234567890123!2d128.6786!3d35.2283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEzJzQxLjkiTiAxMjjCsDQwJzUwLjkiRQ!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="민길아토익학원 위치"
            data-testid="map-iframe"
          ></iframe>
          <CardContent className="p-4 bg-muted/30">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                경남 창원시 성산구 원이대로 587 (정우상가) 7층
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleMapClick}
                data-testid="button-open-map"
                className="whitespace-nowrap"
              >
                크게 보기
              </Button>
            </div>
          </CardContent>
        </Card>
        </motion.div>
      </div>
    </section>
  );
}
