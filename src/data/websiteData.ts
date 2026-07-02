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
  correct: number;    // 正确答案的索引（0-based）
  explanation: string;  // 答题后显示的知识解析
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: '人工智能之父图灵提出的测试叫什么？',
    options: ['图灵测试', '冯诺依曼测试', '香农测试'],
    correct: 0,
    explanation:
      '1950年，艾伦·图灵在论文《计算机器与智能》中提出了"图灵测试"：如果一台机器能让人无法分辨它是人还是机器，就可以认为它具备智能。',
  },
  {
    id: 2,
    question: '以下哪种编程语言最适合AI开发？',
    options: ['Java', 'Python', 'C++'],
    correct: 1,
    explanation:
      'Python 是 AI 领域的首选语言，拥有 PyTorch、TensorFlow、scikit-learn 等丰富的机器学习框架，语法简洁、社区活跃，非常适合快速原型和科研。',
  },
  {
    id: 3,
    question: '监督学习需要什么类型的数据？',
    options: ['标注数据', '无标注数据', '奖励函数'],
    correct: 0,
    explanation:
      '监督学习（Supervised Learning）需要带有标签（标注）的数据——即每个输入都有对应的正确答案，模型通过学习大量"输入→输出"的配对来掌握规律。',
  },
  {
    id: 4,
    question: '以下哪个是大模型的代表架构？',
    options: ['CNN', 'RNN', 'Transformer'],
    correct: 2,
    explanation:
      '2017年 Google 提出的 Transformer 架构（基于自注意力机制）是 GPT、Claude、BERT 等现代大语言模型的核心。CNN 擅长图像，RNN 擅长序列但已被 Transformer 替代。',
  },
  {
    id: 5,
    question: 'AI中的"幻觉"现象指的是什么？',
    options: ['模型生成虚假信息', '模型训练过慢', '模型无法识别图片'],
    correct: 0,
    explanation:
      '"AI幻觉"（Hallucination）指模型生成看似合理但实际错误或虚构的内容。这是当前大模型的主要局限之一，需要人工校验和 RAG 等技术来缓解。',
  },
  {
    id: 6,
    question: 'PyTorch 是由哪家公司开源的深度学习框架？',
    options: ['Google', 'Meta (Facebook)', '微软'],
    correct: 1,
    explanation:
      'PyTorch 由 Meta（原 Facebook）AI 研究院开发，2017年开源。以动态计算图和 Pythonic 风格著称，是目前学术界使用最广的深度学习框架。',
  },
  {
    id: 7,
    question: '以下哪种技术常用于生成图像？',
    options: ['GAN', 'K-Means', 'SVM'],
    correct: 0,
    explanation:
      'GAN（生成对抗网络）由 Goodfellow 于 2014 年提出，通过生成器与判别器的博弈训练，能从随机噪声生成逼真的图像。Stable Diffusion 等工具也基于类似思想。',
  },
  {
    id: 8,
    question: '训练一个 AI 模型时，如果它在训练集上准确率极高但在测试集上很差，这种现象叫？',
    options: ['过拟合', '欠拟合', '梯度消失'],
    correct: 0,
    explanation:
      '过拟合（Overfitting）意味着模型"背题"了训练数据，但没有学会真正的规律。解决方法包括增加训练数据、正则化（L1/L2）、Dropout、早停法等。',
  },
  {
    id: 9,
    question: 'NLP 的全称是什么？',
    options: ['自然语言处理', '神经网络编程', '数字逻辑平台'],
    correct: 0,
    explanation:
      'NLP（Natural Language Processing，自然语言处理）是 AI 的重要分支，让计算机理解、生成人类语言。ChatGPT、翻译软件、语音助手都依赖 NLP 技术。',
  },
  {
    id: 10,
    question: '深度学习中常用的激活函数是？',
    options: ['ReLU', 'Sort', 'Print'],
    correct: 0,
    explanation:
      'ReLU（Rectified Linear Unit，修正线性单元）是最常用的激活函数之一，公式为 f(x)=max(0,x)。它计算简单、能缓解梯度消失问题，被广泛用于 CNN 和 Transformer。',
  },
  {
    id: 11,
    question: 'ChatGPT 是由哪家公司开发的？',
    options: ['OpenAI', 'DeepMind', '百度'],
    correct: 0,
    explanation:
      'ChatGPT 由 OpenAI 于 2022 年 11 月发布，基于 GPT（Generative Pre-trained Transformer）架构。它的爆火引发了全球大模型竞赛，推动 AI 进入大众视野。',
  },
  {
    id: 12,
    question: '什么是"迁移学习"（Transfer Learning）？',
    options: ['将已学知识应用到新任务', '把模型从一台电脑移到另一台', '让 AI 自己学编程'],
    correct: 0,
    explanation:
      '迁移学习指将一个任务上学到的知识（预训练模型）迁移到另一个相关任务上。比如用 ImageNet 预训练的模型微调后识别医学图像——省时省力，效果还好。',
  },
  {
    id: 13,
    question: '以下哪项不是 AI 的常见应用场景？',
    options: ['人脸识别', '智能推荐', '手动记账'],
    correct: 2,
    explanation:
      '人脸识别（计算机视觉）和智能推荐（推荐系统）都是 AI 的典型应用。手动记账属于传统人工操作，不属于 AI 范畴——不过用 OCR 识别发票再自动记账，那就是 AI 了！',
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
