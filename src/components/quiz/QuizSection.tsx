// QuizSection.tsx — AI 知识闯关容器
// QuizCard 内部自带解析面板 + 自动下一题，此处只做页面编排

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

  const total = quizQuestions.length;

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((v) => v + 1);
  };

  const handleNext = () => {
    const next = currentIdx + 1;
    if (next >= total) {
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

  const current = finished ? total : currentIdx;

  /* 根据得分给出不同颜色的评分环 */
  const scorePct = total > 0 ? Math.round((score / total) * 100) : 0;
  const scoreColor =
    scorePct >= 80 ? '#10b981' : scorePct >= 50 ? '#f59e0b' : '#ef4444';

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
          color="#2563EB"
        />

        {!finished && (
          <QuizCard
            key={currentIdx}
            question={quizQuestions[currentIdx]}
            questionNumber={currentIdx + 1}
            totalQuestions={total}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}

        {/* 结果弹窗 */}
        <Modal
          isOpen={showResult}
          onClose={() => setShowResult(false)}
          title="闯关结果"
        >
          <div className="quiz-result">
            {/* 得分环 */}
            <div className="quiz-result__ring" style={{ borderColor: scoreColor }}>
              <span className="quiz-result__ring-value" style={{ color: scoreColor }}>
                {score}
              </span>
              <span className="quiz-result__ring-label">/ {total}</span>
            </div>

            <p className="quiz-result__comment">
              {score >= total
                ? '🎉 满分！你是 AI 达人！'
                : score >= total * 0.7
                  ? '👏 非常棒！你对 AI 了解很深！'
                  : score >= total * 0.5
                    ? '👍 不错！还有进步空间，继续加油！'
                    : '📚 还有提升空间，加入协会一起学习吧！'}
            </p>

            <div className="quiz-result__actions">
              <Button variant="primary" block onClick={handleRestart}>
                再来一次
              </Button>
              <Button
                variant="outline"
                block
                onClick={() => setShowResult(false)}
              >
                关闭
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}
