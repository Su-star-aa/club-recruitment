// AdvantageCards.tsx — 核心优势展示容器

import SectionTitle from '@components/ui/SectionTitle';
import { advantages } from '@data/index';

export default function AdvantageCards() {
  return (
    <section id="advantages" className="section advantages">
      <div className="container">
        <SectionTitle subtitle="为什么选择我们？">核心优势</SectionTitle>

        <div className="advantages__grid">
          {advantages.map((item) => (
            <article key={item.id} className="advantage-card fade-in">
              <span className="advantage-card__icon">{item.icon}</span>
              <h3 className="advantage-card__title">{item.title}</h3>
              <p className="advantage-card__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
