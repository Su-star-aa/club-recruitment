// Achievements.tsx — 成果展示（展示类）
// 成员 C

import { achievements } from '@data/index';

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2 className="section__title fade-in">成果展示</h2>
        <ul className="achievements__list">
          {achievements.map((item, i) => (
            <li key={i} className="fade-in">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
