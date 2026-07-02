// QuizOption.tsx — 测验单选选项（可复用组件 #7）
// 适配新版 quiz：3 个选项（A/B/C），correct 为数字索引

import type { QuizQuestion } from '@data/index';

interface QuizOptionProps {
  question: QuizQuestion;
  optionIndex: number;      // 当前选项在 options 数组中的索引
  isSelected: boolean;
  showResult: boolean;
  disabled: boolean;
  onClick: () => void;
}

const KEY_LABELS = ['A', 'B', 'C'];

export default function QuizOption({
  question,
  optionIndex,
  isSelected,
  showResult,
  disabled,
  onClick,
}: QuizOptionProps) {
  const isCorrect = showResult && optionIndex === question.correct;
  const isWrong = showResult && isSelected && optionIndex !== question.correct;

  let stateClass = '';
  if (isCorrect) stateClass = 'quiz-option--correct';
  else if (isWrong) stateClass = 'quiz-option--wrong';
  else if (isSelected) stateClass = 'quiz-option--selected';

  return (
    <button
      className={`quiz-option ${stateClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="quiz-option__key">{KEY_LABELS[optionIndex] ?? optionIndex}</span>
      <span className="quiz-option__text">{question.options[optionIndex]}</span>
      {isCorrect && <span className="quiz-option__mark">✓</span>}
      {isWrong && <span className="quiz-option__mark">✕</span>}
    </button>
  );
}
