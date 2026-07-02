// QuizCard.tsx — 单道测验题卡片（可复用组件 #8）
// 适配新版 quiz：3 选项 + correct 为索引 + 无 explanation

import { useState } from 'react';
import type { QuizQuestion } from '@data/index';
import QuizOption from './QuizOption';
import Button from './Button';

interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  onAnswer: (correct: boolean) => void;
}

export default function QuizCard({
  question,
  questionNumber,
  onAnswer,
}: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    const correct = selected === question.correct;
    setSubmitted(true);
    onAnswer(correct);
  };

  return (
    <div className="quiz-card fade-in">
      <div className="quiz-card__header">
        <span className="quiz-card__number">第 {questionNumber} 题</span>
      </div>

      <p className="quiz-card__question">{question.question}</p>

      <div className="quiz-card__options">
        {question.options.map((_, idx) => (
          <QuizOption
            key={idx}
            question={question}
            optionIndex={idx}
            isSelected={selected === idx}
            showResult={submitted}
            disabled={submitted}
            onClick={() => handleSelect(idx)}
          />
        ))}
      </div>

      {!submitted && (
        <Button
          variant="primary"
          block
          disabled={selected === null}
          onClick={handleSubmit}
        >
          提交答案
        </Button>
      )}
    </div>
  );
}
