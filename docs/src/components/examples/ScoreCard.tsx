import ScoreCard from '../ScoreCard';
import scoreImage from '@assets/generated_images/TOEIC_score_report_890_bbf85ceb.png';

export default function ScoreCardExample() {
  return (
    <div className="p-6 max-w-xs">
      <ScoreCard
        imageSrc={scoreImage}
        name="김○○"
        score="890점"
        duration="3개월"
      />
    </div>
  );
}
