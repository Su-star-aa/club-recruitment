// Button.tsx — 通用按钮（可复用组件 #1）
// 支持 primary / secondary / outline 三种变体 + block 全宽模式

import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  block?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  block = false,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const cls = [
    'btn',
    `btn--${variant}`,
    block ? 'btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
