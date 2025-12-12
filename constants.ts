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
    slug: '日常对话使用',
    title: '日常使用接入api教学',
    excerpt: '快速教学',
    date: '2025年12月11日',
    readTime: '8 分钟阅读',
    tags: ['Cherrystudio', 'chat', 'api'],
    content: `
## 电脑端使用方式推荐

推荐接入cherry studio，方便日常对话和使用ai大模型

### 详细指南

1.官网下载[Cherry Studio](https://www.cherry-ai.com/)
![[Pasted image 20251212175036.png]]
2.安装软件 win mac下载对应的安装包进行安装
3.进入软件点击设置![[Pasted image 20251212175305.png]]
添加模型服务平台 keepcode![[Pasted image 20251212175412.png]]
4.接下来进入keepcode官网[[https://api.keepgo.icu/]]在api令牌处点击添加令牌![[Pasted image 20251212175606.png]]
设置名称选择你想用的模型的对应分组 注意分组的倍率，不同的渠道有不同的模型的倍率![[Pasted image 20251212175823.png]]
注意开启无限额度，以防后期余额不足重新配置
5.![[Pasted image 20251212175946.png]]
创建好后记得复制密钥，然后回到我们的cherrystudio
\`\`\`
  https://api.keepgo.icu
  https://api.keepgo.icu/v1 
  https://api.keepgo.icu/v1/chat/completions
\`\`\`
不同的软件可能使用不同的base url一般我们选择第一个
![[Pasted image 20251212181004.png]]

将复制好的密钥添加进去，最后要在你的分组下选择一个你想用的模型，比如我刚才选择的是AZ分组我现在打算使用gpt5.1
![[Pasted image 20251212180338.png]]
复制模型名称![[Pasted image 20251212180729.png]]
在上方选择你对应分组的模型，就可以聊天了![[Pasted image 20251212181033.png]]

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
