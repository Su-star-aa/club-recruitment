// ==========================================
// src/data/websiteData.ts
// 全站统一数据配置 — 类型定义 + 数据合一
// ==========================================

/* ==================== 1. 协会基本信息 ==================== */

export interface ClubInfo {
  name: string;
  nameEn: string;
  slogan: string;
  subSlogan: string;
  description: string;
  tags: string[];
}

export const clubInfo: ClubInfo = {
  name: '常州工学院人工智能协会',
  nameEn: 'CZU AI Association',
  slogan: '码上AI，智取未来',
  subSlogan: '探索智能边界，共筑AI未来',
  description:
    '普及AI新兴资讯，构建递进式AI知识体系，通过项目实战提升代码能力，营造自主学习与协同创新的开放社区。',
  tags: ['五星社团', '学术科技类', '创新团队'],
};


/* ==================== 2. 导航菜单 ==================== */

export interface NavItem {
  label: string;
  anchor: string;
}

export const navItems: NavItem[] = [
  { label: '首页', anchor: 'home' },
  { label: '关于协会', anchor: 'about' },
  { label: '特色活动', anchor: 'activities' },
  { label: '加入我们', anchor: 'register' },
];


/* ==================== 3. 四大核心优势 ==================== */

export interface Advantage {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const advantages: Advantage[] = [
  {
    id: 1,
    icon: '🔭',
    title: 'AI瞭望塔',
    description:
      '掌握全球AI科技脉搏，大模型、自动驾驶、AIGC前沿动态一网打尽。',
  },
  {
    id: 2,
    icon: '📚',
    title: '智识工坊',
    description:
      '从Python基础到深度学习，体系化课程+学长带练，理论实战两不误。',
  },
  {
    id: 3,
    icon: '⚔️',
    title: '代码竞技场',
    description:
      '算法周赛、代码审查、开源贡献，用真实项目锤炼编码硬实力。',
  },
  {
    id: 4,
    icon: '🧪',
    title: '创新实验室',
    description:
      'GPU算力支持+导师指导，鼓励每一个天马行空的想法落地成真。',
  },
];


/* ==================== 4. 特色活动（翻转卡片） ==================== */

export interface Activity {
  id: number;
  title: string;
  frontDesc: string;
  backDetail: string;
  icon: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    title: '大模型微调工作坊',
    frontDesc: '手把手教你部署开源大模型',
    backDetail:
      '每月举办，使用LLaMA 3、ChatGLM等主流开源模型，从环境配置到LoRA微调全流程实战。',
    icon: '🤖',
  },
  {
    id: 2,
    title: 'AI黑客马拉松',
    frontDesc: '24小时极限开发AI应用',
    backDetail:
      '每学期一次，4-5人组队开发，优秀项目推荐参加中国大学生服务外包创新创业大赛。',
    icon: '⚡',
  },
  {
    id: 3,
    title: '智能车竞赛训练营',
    frontDesc: '从零搭建自动驾驶小车',
    backDetail:
      '依托全国大学生智能汽车竞赛，从硬件搭建到控制算法实现，完整走一遍自动驾驶开发流程。',
    icon: '🏎️',
  },
];


/* ==================== 5. 投票选项 ==================== */

export interface PollOption {
  id: string;
  label: string;
  icon: string;
}

export const pollOptions: PollOption[] = [
  { id: 'cv', label: '计算机视觉（CV）', icon: '👁️' },
  { id: 'nlp', label: '自然语言处理（NLP）', icon: '💬' },
  { id: 'robot', label: '机器人控制与嵌入式AI', icon: '🤖' },
  { id: 'ethics', label: 'AI伦理与安全', icon: '⚖️' },
];


/* ==================== 6. AI 知识闯关 ==================== */

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;   // 正确答案的索引（0-based）
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: '人工智能之父图灵提出的测试叫什么？',
    options: ['图灵测试', '冯诺依曼测试', '香农测试'],
    correct: 0,
  },
  {
    id: 2,
    question: '以下哪种编程语言最适合AI开发？',
    options: ['Java', 'Python', 'C++'],
    correct: 1,
  },
  {
    id: 3,
    question: '监督学习需要什么类型的数据？',
    options: ['标注数据', '无标注数据', '奖励函数'],
    correct: 0,
  },
  {
    id: 4,
    question: '以下哪个是大模型的代表架构？',
    options: ['CNN', 'RNN', 'Transformer'],
    correct: 2,
  },
  {
    id: 5,
    question: 'AI中的"幻觉"现象指的是什么？',
    options: ['模型生成虚假信息', '模型训练过慢', '模型无法识别图片'],
    correct: 0,
  },
];


/* ==================== 7. 页脚信息 ==================== */

export interface FooterInfo {
  email: string;
  copyright: string;
}

export const footerInfo: FooterInfo = {
  email: 'ai@czu.edu.cn',
  copyright: '© 2026 常州工学院人工智能协会',
};


/* ==================== 8. 部门介绍（保留） ==================== */

export interface Department {
  name: string;
  description: string;
}

export const departments: Department[] = [
  {
    name: '技术部',
    description:
      '核心研发力量，负责算法研究、模型训练、项目开发。适合有一定编程基础、热爱钻研的同学。',
  },
  {
    name: '运营部',
    description:
      '活动策划与执行、新媒体运营、对外联络。适合善于沟通、有创意的同学。',
  },
  {
    name: '宣传部',
    description:
      '海报设计、视频剪辑、公众号推文。适合有审美、会设计或想学的同学。',
  },
  {
    name: '外联部',
    description:
      '企业参访对接、嘉宾邀请、赞助合作。适合外向开朗、善于交际的同学。',
  },
];


/* ==================== 9. 成果展示（保留） ==================== */

export const achievements: string[] = [
  '2024 中国大学生计算机设计大赛 省二等奖',
  '2024 "互联网+" 大学生创新创业大赛 校一等奖',
  '协会成员发表 AI 相关论文 3 篇',
  '累计举办技术分享会 20+ 场',
  '与多家企业达成校企合作',
];


/* ==================== 10. 报名表单配置 ==================== */

export interface SignUpFormData {
  name: string;
  studentId: string;
  college: string;
  phone: string;
  qq?: string;
  department: string;
  introduction: string;
}

export const initialForm: SignUpFormData = {
  name: '',
  studentId: '',
  college: '',
  phone: '',
  qq: '',
  department: '',
  introduction: '',
};

export const deptOptions = ['技术部', '运营部', '宣传部', '外联部'] as const;
