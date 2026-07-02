// VoteOptionCard.tsx — 投票选项卡片（可复用组件 #6）

import type { PollOption } from '@data/index';

interface VoteOptionCardProps {
  option: PollOption;
  selected: boolean;
  disabled: boolean;
  percentage?: number;
  showResult?: boolean;
  onClick: () => void;
}

export default function VoteOptionCard({
  option,
  selected,
  disabled,
  percentage,
  showResult,
  onClick,
}: VoteOptionCardProps) {
  const cls = [
    'vote-option',
    selected ? 'vote-option--selected' : '',
    disabled ? 'vote-option--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} onClick={onClick} disabled={disabled}>
      <div className="vote-option__body">
        <span className="vote-option__icon">{option.icon}</span>
        <div className="vote-option__content">
          <strong className="vote-option__title">{option.label}</strong>
        </div>
        {selected && <span className="vote-option__check">✓</span>}
      </div>

      {showResult && percentage !== undefined && (
        <div className="vote-option__bar">
          <div
            className="vote-option__bar-fill"
            style={{ width: `${percentage}%` }}
          />
          <span className="vote-option__pct">{percentage}%</span>
        </div>
      )}
    </button>
  );
}
