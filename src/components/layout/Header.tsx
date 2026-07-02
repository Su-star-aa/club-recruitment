// Header.tsx — 顶部导航栏（布局类 · 成员 A）
// 桌面导航 + 移动端汉堡菜单

import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '@hooks/index';
import { navItems } from '@data/index';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo" onClick={handleNavClick}>
          CZU AI
        </a>

        <nav className={`header__nav${mobileOpen ? ' header__nav--open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.anchor} href={`#${item.anchor}`} onClick={handleNavClick}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            className="header__theme-toggle"
            onClick={onToggleTheme}
            aria-label="切换主题"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className={`header__hamburger${mobileOpen ? ' header__hamburger--open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="菜单"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
