// Hero.tsx — 首屏英雄区（展示类 · 成员 B）

import { useState, useEffect } from 'react';
import { useScrollFade } from '@hooks/index';
import { typewriter } from '@utils/index';
import { clubInfo } from '@data/index';

export default function Hero() {
  const titleRef = useScrollFade();
  const subtitleRef = useScrollFade();
  const tagsRef = useScrollFade();
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const cleanup = typewriter(clubInfo.name, setTypedText, 100);
    return cleanup;
  }, []);

  return (
    <section id="home" className="section hero">
      <div className="container hero__inner">
        <h1 ref={titleRef} className="hero__title fade-in">
          {typedText}
          <span className="hero__cursor">|</span>
        </h1>
        <p ref={subtitleRef} className="hero__subtitle fade-in">
          {clubInfo.subSlogan}
        </p>
        <p className="hero__slogan">{clubInfo.slogan}</p>
        <div ref={tagsRef} className="hero__tags fade-in">
          {clubInfo.tags.map((tag) => (
            <span key={tag} className="hero__tag">{tag}</span>
          ))}
        </div>
        <a href="#register" className="hero__cta">
          立即报名
        </a>
      </div>
    </section>
  );
}
