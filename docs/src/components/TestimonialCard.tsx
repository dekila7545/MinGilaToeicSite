import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  course: string;
  duration: string;
  score?: string;
  review: string;
}

export default function TestimonialCard({ name, course, duration, score, review }: TestimonialCardProps) {
  return (
    <Card className="h-full" data-testid={`card-testimonial-${name}`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        
        <p className="text-sm leading-relaxed mb-6 flex-grow">{review}</p>
        
        <div className="space-y-2 pt-4 border-t">
          <p className="font-semibold" data-testid={`text-name-${name}`}>{name}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" data-testid={`badge-course-${name}`}>{course}</Badge>
            <Badge variant="secondary" data-testid={`badge-duration-${name}`}>{duration}</Badge>
            {score && <Badge variant="secondary" data-testid={`badge-score-${name}`}>{score}</Badge>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
