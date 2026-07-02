// VoteSection.tsx — 研究方向投票容器

import { useState, useMemo } from 'react';
import SectionTitle from '@components/ui/SectionTitle';
import VoteOptionCard from '@components/ui/VoteOptionCard';
import ProgressBar from '@components/ui/ProgressBar';
import Button from '@components/ui/Button';
import { pollOptions } from '@data/index';

const MOCK_VOTES = [42, 35, 28, 18];

export default function VoteSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const totalVotes = useMemo(() => MOCK_VOTES.reduce((a, b) => a + b, 0), []);

  const handleSubmit = () => {
    if (!selectedId) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedId(null);
    setSubmitted(false);
  };

  return (
    <section id="vote" className="section vote">
      <div className="container">
        <SectionTitle subtitle="选出你最感兴趣的方向，让我们更好地规划活动">
          研究方向投票
        </SectionTitle>

        <div className="vote__options">
          {pollOptions.map((opt, idx) => {
            const pct = Math.round((MOCK_VOTES[idx] / totalVotes) * 100);
            return (
              <VoteOptionCard
                key={opt.id}
                option={opt}
                selected={selectedId === opt.id}
                disabled={submitted}
                percentage={pct}
                showResult={submitted}
                onClick={() => !submitted && setSelectedId(opt.id)}
              />
            );
          })}
        </div>

        {!submitted ? (
          <div className="vote__action">
            <Button variant="primary" disabled={!selectedId} onClick={handleSubmit}>
              提交投票
            </Button>
          </div>
        ) : (
          <div className="vote__result">
            <ProgressBar
              current={totalVotes}
              total={totalVotes}
              label={`共 ${totalVotes} 人参与投票`}
              color="#2563EB"
            />
            <Button variant="outline" onClick={handleReset}>
              重新投票
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
