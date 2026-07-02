// QuizCard.tsx — 单道测验题卡片（可复用组件 #8）
// 提交后展示答案解析 + 自动倒计时进入下一题

import { useState, useEffect, useRef } from 'react';
import type { QuizQuestion } from '@data/index';
import QuizOption from './QuizOption';
import Button from './Button';

interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}

export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
}: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [autoTimer, setAutoTimer] = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasFiredOnAnswer = useRef(false);

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    const correct = selected === question.correct;
    setSubmitted(true);

    // 只触发一次计分
    if (!hasFiredOnAnswer.current) {
      hasFiredOnAnswer.current = true;
      onAnswer(correct);
    }
  };

  // 提交后自动倒计时
  useEffect(() => {
    if (!submitted) return;

    setAutoTimer(3);
    timerRef.current = setInterval(() => {
      setAutoTimer((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          onNext();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [submitted, onNext]);

  const isCorrect = submitted && selected === question.correct;
  const isLast = questionNumber >= totalQuestions;

  return (
    <div className="quiz-card fade-in">
      <div className="quiz-card__header">
        <span className="quiz-card__number">第 {questionNumber} 题 / 共 {totalQuestions} 题</span>
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

      {/* 提交后：解析面板 */}
      {submitted && (
        <div className={`quiz-card__explanation ${isCorrect ? 'quiz-card__explanation--correct' : 'quiz-card__explanation--wrong'}`}>
          <div className="quiz-card__verdict">
            {isCorrect ? '✅ 回答正确！' : '❌ 回答错误'}
          </div>
          <p className="quiz-card__detail">{question.explanation}</p>
          <div className="quiz-card__timer">
            <span className="quiz-card__timer-bar" style={{ animationDuration: '3s' }} />
            <span className="quiz-card__timer-text">
              {autoTimer}秒后{isLast ? '查看结果' : '自动下一题'}
            </span>
          </div>
          <Button
            variant={isLast ? 'primary' : 'secondary'}
            block
            onClick={onNext}
          >
            {isLast ? '查看结果' : '下一题'}
          </Button>
        </div>
      )}

      {/* 提交前：答案按钮 */}
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
