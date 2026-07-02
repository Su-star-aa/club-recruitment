// ActivityCards.tsx — 特色活动翻转卡片容器

import SectionTitle from '@components/ui/SectionTitle';
import FlipCard from '@components/ui/FlipCard';
import { activities } from '@data/index';

export default function ActivityCards() {
  return (
    <section id="activities" className="section flipcards">
      <div className="container">
        <SectionTitle subtitle="点击卡片查看活动详情">
          特色活动
        </SectionTitle>

        <div className="flipcards__grid">
          {activities.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
