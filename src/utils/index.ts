// ==========================================
// 工具函数
// ==========================================

/**
 * 打字机效果 — 逐字显示文本
 * @param text 要逐字显示的文本
 * @param onUpdate 每次追加字符后的回调
 * @param speed 每字间隔（ms）
 * @returns 清除定时器的函数
 */
export function typewriter(
  text: string,
  onUpdate: (current: string) => void,
  speed = 80,
): () => void {
  let idx = 0;
  const timer = setInterval(() => {
    idx += 1;
    onUpdate(text.slice(0, idx));
    if (idx >= text.length) clearInterval(timer);
  }, speed);
  return () => clearInterval(timer);
}

/**
 * 防抖
 */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay = 300,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * 获取当前年份
 */
export function currentYear(): number {
  return new Date().getFullYear();
}
