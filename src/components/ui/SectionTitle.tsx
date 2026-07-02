// SectionTitle.tsx — 通用区块标题（可复用组件 #2）
// 可选副标题，居中排版

import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="section__header fade-in">
      <h2 className="section__title">{children}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </div>
  );
}
