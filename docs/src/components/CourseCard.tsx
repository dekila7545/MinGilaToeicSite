import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface CourseCardProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  schedule?: string;
  targetAudience?: string[];
  curriculum?: string[];
  features?: string[];
  level?: string;
  specialNote?: string;
}

export default function CourseCard({ 
  title, 
  subtitle,
  icon: Icon, 
  schedule,
  targetAudience,
  curriculum,
  features,
  level,
  specialNote
}: CourseCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 h-full" data-testid={`card-course-${title}`}>
      <CardHeader className="space-y-4">
        <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <CardTitle className="text-2xl mb-2">{title}</CardTitle>
          {subtitle && <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>}
          {level && <Badge variant="secondary" data-testid={`badge-level-${title}`}>{level}</Badge>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {schedule && (
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-1">수업 일정</p>
            <p className="text-sm leading-relaxed">{schedule}</p>
          </div>
        )}
        
        {targetAudience && targetAudience.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">수강 대상</p>
            <ul className="space-y-1.5">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {curriculum && curriculum.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">강좌 내용</p>
            <ul className="space-y-1.5">
              {curriculum.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {features && features.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">주요 특징</p>
            <ul className="space-y-1.5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {specialNote && (
          <div className="pt-3 border-t">
            <p className="text-sm text-primary/80 leading-relaxed italic">
              {specialNote}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
