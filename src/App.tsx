// App.tsx — 根组件：主题管理 + 单页布局
// 数据来源：src/data/websiteData.ts

import { useTheme } from '@hooks/index';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Hero from '@components/hero/Hero';
import About from '@components/about/About';
import AdvantageCards from '@components/advantages/AdvantageCards';
import ActivityCards from '@components/flipcards/ActivityCards';
import VoteSection from '@components/vote/VoteSection';
import QuizSection from '@components/quiz/QuizSection';
import JoinForm from '@components/join/JoinForm';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <AdvantageCards />
        <ActivityCards />
        <VoteSection />
        <QuizSection />
        <JoinForm />
      </main>
      <Footer />
    </>
  );
}
