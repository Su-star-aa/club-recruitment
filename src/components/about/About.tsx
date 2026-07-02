// About.tsx — 关于协会（展示类 · 成员 B）

import { useScrollFade } from '@hooks/index';
import { clubInfo } from '@data/index';

export default function About() {
  const titleRef = useScrollFade();
  const contentRef = useScrollFade();

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 ref={titleRef} className="section__title fade-in">
          关于协会
        </h2>
        <div ref={contentRef} className="about__content fade-in">
          <p>{clubInfo.description}</p>
          <p className="about__en-name">{clubInfo.nameEn}</p>
        </div>
      </div>
    </section>
  );
}
