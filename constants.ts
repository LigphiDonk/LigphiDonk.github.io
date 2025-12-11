import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-agi',
    title: '国内如何使用claude code 与 codex',
    excerpt: '快速掌握cli工具配置。',
    date: '2025年12月12日',
    readTime: '5 分钟阅读',
    tags: ['AI', '架构', '快速入门'],
    content: `
## 范式转移

当我们逼近通用人工智能（AGI）的地平线时，软件系统的基础架构必须随之进化。传统的分布式计算模式虽然稳健，但在面对未来模型对吞吐量和延迟的极致要求时，可能已显得力不从心。

### 可扩展性向量 (Scalability Vectors)

1. **计算密度 (Compute Density)**: 超越简单的并行计算，转向模型感知的调度策略。
2. **显存带宽 (Memory Bandwidth)**: 瓶颈不再仅仅是 FLOPs，而是我们能多快地喂入数据。
3. **互连拓扑 (Interconnect Topology)**: 针对高维张量通信进行优化的网络拓扑。

> “我们今天构建的系统，是孕育明日智能的摇篮。”

这需要我们重新思考如何部署 Kubernetes 集群，如何管理分布式数据库中的状态，以及从根本上——我们如何编写代码。

## Rust 在 AI 基础设施中的崛起

我们正见证着底层基础设施向 Rust 的大规模迁移。其内存安全保证结合零成本抽象（Zero-cost abstractions），使其成为推理引擎关键路径的理想选择。

\`\`\`rust
fn main() {
    println!("你好, AGI!");
}
\`\`\`

这仅仅是一个开始。
    `
  },
  {
    id: '2',
    slug: 'react-server-components',
    title: '深入理解 React Server Components：回顾与展望',
    excerpt: '深度解析 RSC 对前端架构、数据获取策略以及用户体验带来的深远影响。',
    date: '2023年9月28日',
    readTime: '8 分钟阅读',
    tags: ['React', '前端', 'Web开发'],
    content: `
## 移动边界

React Server Components (RSC) 代表了自 Hooks 以来 React 生态系统中最重要的变革。通过允许组件在服务器端独占渲染，我们显著减少了发送到客户端的 Bundle 体积，并提升了首次内容绘制 (FCP) 的速度。

### 核心优势

*   **零 Bundle 体积**: RSC 中使用的依赖项不会包含在客户端 Bundle 中。
*   **直接数据库访问**: 直接从组件中查询数据库，无需中间层 API。
*   **自动代码分割**: 服务器组件引入的客户端组件会自动进行代码分割。

然而，这也引入了缓存和状态管理的复杂性。客户端与服务器之间的边界现在变得流动，要求工程师具备全栈视角的架构能力。
    `
  },
  {
    id: '3',
    slug: 'designing-minimalist-interfaces',
    title: 'UI 设计中的减法艺术',
    excerpt: '为什么在构建复杂的开发者工具时，“少即是多”。关于留白与排版的深度分析。',
    date: '2023年8月15日',
    readTime: '4 分钟阅读',
    tags: ['设计', '用户体验', '极简主义'],
    content: `
## 清晰至上

在技术工具中，用户的认知负荷（Cognitive Load）通常很高。他们可能正在调试代码、构建项目或分析数据。界面不应增加这种负担，而应致力于减轻它。

### 极简设计原则

1.  **排版即 UI (Typography is UI)**: 优秀的字体层级结构可以消除对繁重边框和背景的依赖。
2.  **留白是活跃的 (Whitespace is Active)**: 它不仅是空白，更是对内容的自然分组和对视线的引导。
3.  **功能重于形式**: 动画应当服务于功能（如定位、反馈），而不仅仅是为了装饰。

当我们剥离掉所有装饰性元素，剩下的就是软件最纯粹的效用。这种赤裸的呈现迫使我们将核心交互打磨得完美无缺。
    `
  }
];
