import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ScoreCardProps {
  imageSrc: string;
  name: string;
  score: string;
  duration: string;
}

export default function ScoreCard({ imageSrc, name, score, duration }: ScoreCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-score-${name}`}>
      <div className="aspect-[3/4] relative">
        <img
          src={imageSrc}
          alt={`${name}의 성적표`}
          className="w-full h-full object-cover"
          data-testid={`img-score-${name}`}
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="font-semibold" data-testid={`text-name-${name}`}>{name}</p>
        <div className="flex gap-2 flex-wrap">
          <Badge data-testid={`badge-score-${name}`}>{score}</Badge>
          <Badge variant="secondary" data-testid={`badge-duration-${name}`}>{duration}</Badge>
        </div>
      </div>
    </Card>
  );
}
