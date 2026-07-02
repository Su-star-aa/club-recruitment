// QuizSection.tsx — AI 知识闯关容器

import { useState } from 'react';
import SectionTitle from '@components/ui/SectionTitle';
import QuizCard from '@components/ui/QuizCard';
import ProgressBar from '@components/ui/ProgressBar';
import Modal from '@components/ui/Modal';
import Button from '@components/ui/Button';
import { quizQuestions } from '@data/index';

export default function QuizSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((v) => v + 1);
  };

  const handleNext = () => {
    const next = currentIdx + 1;
    if (next >= quizQuestions.length) {
      setFinished(true);
      setShowResult(true);
    } else {
      setCurrentIdx(next);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setScore(0);
    setFinished(false);
    setShowResult(false);
  };

  const total = quizQuestions.length;
  const current = finished ? total : currentIdx;

  return (
    <section id="quiz" className="section quiz">
      <div className="container">
        <SectionTitle subtitle={`共 ${total} 题 · 测测你的 AI 知识储备`}>
          AI 知识闯关
        </SectionTitle>

        <ProgressBar
          current={current}
          total={total}
          label={`${current} / ${total}`}
        />

        {!finished && (
          <>
            <QuizCard
              key={currentIdx}
              question={quizQuestions[currentIdx]}
              questionNumber={currentIdx + 1}
              onAnswer={handleAnswer}
            />
            <div className="quiz__next">
              <Button variant="secondary" onClick={handleNext}>
                {currentIdx + 1 >= total ? '查看结果' : '下一题'}
              </Button>
            </div>
          </>
        )}

        <Modal
          isOpen={showResult}
          onClose={() => setShowResult(false)}
          title="闯关结果"
        >
          <div className="quiz-result">
            <p className="quiz-result__score">
              你答对了{' '}
              <strong>
                {score} / {total}
              </strong>{' '}
              题
            </p>
            <p className="quiz-result__comment">
              {score >= total
                ? '🎉 满分！你是 AI 达人！'
                : score >= total * 0.6
                  ? '👍 不错！继续加油！'
                  : '📚 还有提升空间，加入协会一起学习吧！'}
            </p>
            <Button variant="primary" block onClick={handleRestart}>
              再来一次
            </Button>
          </div>
        </Modal>
      </div>
    </section>
  );
}
