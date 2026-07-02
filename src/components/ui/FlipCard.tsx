// FlipCard.tsx — 翻转卡片（可复用组件 #5）
// Accepts Activity type, hover/click 触发 3D 翻转

import { useState } from 'react';
import type { Activity } from '@data/index';

interface FlipCardProps {
  card: Activity;
}

export default function FlipCard({ card }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card${flipped ? ' flip-card--flipped' : ''}`}
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((v) => !v);
        }
      }}
    >
      <div className="flip-card__inner">
        {/* === 正面 === */}
        <div className="flip-card__front">
          <span className="flip-card__icon">{card.icon}</span>
          <h3 className="flip-card__title">{card.title}</h3>
          <p className="flip-card__text">{card.frontDesc}</p>
          <span className="flip-card__hint">点击翻转 →</span>
        </div>

        {/* === 背面 === */}
        <div className="flip-card__back">
          <h3 className="flip-card__title">{card.title}</h3>
          <p className="flip-card__text">{card.backDetail}</p>
          <span className="flip-card__hint">← 点击翻回</span>
        </div>
      </div>
    </div>
  );
}
