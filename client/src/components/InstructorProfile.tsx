import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface InstructorProfileProps {
  name: string;
  title: string;
  imageSrc: string;
  credentials: string[];
  philosophy: string;
  quote: string;
  reverse?: boolean;
}

export default function InstructorProfile({
  name,
  title,
  imageSrc,
  credentials,
  philosophy,
  quote,
  reverse = false
}: InstructorProfileProps) {
  const isMingila = name === "민길아 원장";
  const isSunny = name === "SUNNY 강사";
  
  return (
    <Card className="overflow-hidden" data-testid={`card-instructor-${name}`}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className={`relative h-80 lg:h-auto overflow-hidden ${reverse ? 'lg:order-2' : ''}`}>
          <img
            src={imageSrc}
            alt={name}
            className={`w-full h-full ${isMingila || isSunny ? 'object-cover object-top scale-125' : 'object-cover'}`}
            data-testid={`img-instructor-${name}`}
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2" data-testid={`text-name-${name}`}>
              {name}
            </h3>
            <Badge variant="secondary" className="mb-4" data-testid={`badge-title-${name}`}>{title}</Badge>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground mb-3">주요 경력</h4>
            <ul className="space-y-2">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-start gap-2 text-sm leading-relaxed">
                  <span className="text-primary mt-1">•</span>
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-sm leading-relaxed text-foreground/90">{philosophy}</p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <p className="text-sm italic text-muted-foreground leading-relaxed">"{quote}"</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
