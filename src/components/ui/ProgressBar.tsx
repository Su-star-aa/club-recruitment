// ProgressBar.tsx — 进度条（可复用组件 #3）
// 用于测验进度、投票占比等场景

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;       // 如 "3 / 5"
  color?: string;       // CSS 颜色值，默认品牌蓝
}

export default function ProgressBar({
  current,
  total,
  label,
  color = '#2563EB',
}: ProgressBarProps) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="progress-bar">
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      {label && <span className="progress-bar__label">{label}</span>}
    </div>
  );
}
