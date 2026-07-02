// ==========================================
// 自定义 Hooks
// ==========================================

import { useState, useEffect, useCallback } from 'react';

/** 主题模式 */
export type Theme = 'light' | 'dark';

/**
 * 深浅主题切换 Hook
 * 从 localStorage 读取偏好，并通过切换 body.dark 类名实现主题切换
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem('theme', t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return { theme, setTheme, toggleTheme };
}

/**
 * Intersection Observer 滚入淡入 Hook
 * 返回 ref 绑定到需观察的元素，进入视口时自动添加 .visible 类名
 */
export function useScrollFade(options?: IntersectionObserverInit) {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    });
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return setRef;
}
